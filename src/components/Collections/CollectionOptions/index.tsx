import { AlbumCollectionOption } from './AlbumCollectionOption';
import React, { useContext } from 'react';
import * as CollectionAPI from 'services/collectionService';
import * as TrashService from 'services/trashService';
import {
    changeCollectionVisibility,
    downloadAllCollectionFiles,
} from 'utils/collection';
import constants from 'utils/strings/constants';
import { SetCollectionNamerAttributes } from '../CollectionNamer';
import { Collection } from 'types/collection';
import { IsArchived } from 'utils/magicMetadata';
import { GalleryContext } from 'pages/gallery';
import { logError } from 'utils/sentry';
import { VISIBILITY_STATE } from 'types/magicMetadata';
import { AppContext } from 'pages/_app';
import OverflowMenu from 'components/OverflowMenu/menu';
import { CollectionSummaryType } from 'constants/collection';
import { TrashCollectionOption } from './TrashCollectionOption';
import { SharedCollectionOption } from './SharedCollectionOption';
import { OnlyDownloadCollectionOption } from './OnlyDownloadCollectionOption';
import { QuickOptions } from './QuickOptions';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { HorizontalFlex } from 'components/Container';

interface CollectionOptionsProps {
    setCollectionNamerAttributes: SetCollectionNamerAttributes;
    activeCollection: Collection;
    collectionSummaryType: CollectionSummaryType;
    showCollectionShareModal: () => void;
    redirectToAll: () => void;
}

export enum CollectionActions {
    SHOW_RENAME_DIALOG,
    RENAME,
    CONFIRM_DOWNLOAD,
    DOWNLOAD,
    ARCHIVE,
    UNARCHIVE,
    CONFIRM_DELETE,
    DELETE_WITH_FILES,
    DELETE_BUT_KEEP_FILES,
    SHOW_SHARE_DIALOG,
    CONFIRM_EMPTY_TRASH,
    EMPTY_TRASH,
    CONFIRM_LEAVE_SHARED_ALBUM,
    LEAVE_SHARED_ALBUM,
}

const CollectionOptions = (props: CollectionOptionsProps) => {
    const {
        activeCollection,
        collectionSummaryType,
        redirectToAll,
        setCollectionNamerAttributes,
        showCollectionShareModal,
    } = props;

    const { startLoading, finishLoading, setDialogMessage } =
        useContext(AppContext);
    const { syncWithRemote } = useContext(GalleryContext);

    const handleCollectionAction = (
        action: CollectionActions,
        loader = true
    ) => {
        let callback;
        switch (action) {
            case CollectionActions.SHOW_RENAME_DIALOG:
                callback = showRenameCollectionModal;
                break;
            case CollectionActions.RENAME:
                callback = renameCollection;
                break;
            case CollectionActions.CONFIRM_DOWNLOAD:
                callback = confirmDownloadCollection;
                break;
            case CollectionActions.DOWNLOAD:
                callback = downloadCollection;
                break;
            case CollectionActions.ARCHIVE:
                callback = archiveCollection;
                break;
            case CollectionActions.UNARCHIVE:
                callback = unArchiveCollection;
                break;
            case CollectionActions.CONFIRM_DELETE:
                callback = confirmDeleteCollection;
                break;
            case CollectionActions.DELETE_WITH_FILES:
                callback = deleteCollectionAlongWithFiles;
                break;
            case CollectionActions.DELETE_BUT_KEEP_FILES:
                callback = deleteCollectionButKeepFiles;
                break;
            case CollectionActions.SHOW_SHARE_DIALOG:
                callback = showCollectionShareModal;
                break;
            case CollectionActions.CONFIRM_EMPTY_TRASH:
                callback = confirmEmptyTrash;
                break;
            case CollectionActions.EMPTY_TRASH:
                callback = emptyTrash;
                break;
            case CollectionActions.CONFIRM_LEAVE_SHARED_ALBUM:
                callback = confirmLeaveSharedAlbum;
                break;
            case CollectionActions.LEAVE_SHARED_ALBUM:
                callback = leaveSharedAlbum;
                break;
            default:
                logError(
                    Error('invalid collection action '),
                    'handleCollectionAction failed'
                );
                {
                    action;
                }
        }
        return async (...args) => {
            try {
                loader && startLoading();
                await callback(...args);
            } catch (e) {
                setDialogMessage({
                    title: constants.ERROR,
                    content: constants.UNKNOWN_ERROR,
                    close: { variant: 'danger' },
                });
            } finally {
                syncWithRemote(false, true);
                loader && finishLoading();
            }
        };
    };

    const renameCollection = async (newName: string) => {
        if (activeCollection.name !== newName) {
            await CollectionAPI.renameCollection(activeCollection, newName);
        }
    };

    const deleteCollectionAlongWithFiles = async () => {
        await CollectionAPI.deleteCollection(activeCollection.id, false);
        redirectToAll();
    };

    const deleteCollectionButKeepFiles = async () => {
        await CollectionAPI.deleteCollection(activeCollection.id, true);
        redirectToAll();
    };

    const leaveSharedAlbum = async () => {
        await CollectionAPI.leaveSharedAlbum(activeCollection.id);
        redirectToAll();
    };

    const archiveCollection = () => {
        changeCollectionVisibility(activeCollection, VISIBILITY_STATE.ARCHIVED);
    };

    const unArchiveCollection = () => {
        changeCollectionVisibility(activeCollection, VISIBILITY_STATE.VISIBLE);
    };

    const downloadCollection = () => {
        downloadAllCollectionFiles(activeCollection.id);
    };

    const emptyTrash = async () => {
        await TrashService.emptyTrash();
        await TrashService.clearLocalTrash();
        redirectToAll();
    };

    const showRenameCollectionModal = () => {
        setCollectionNamerAttributes({
            title: constants.RENAME_COLLECTION,
            buttonText: constants.RENAME,
            autoFilledName: activeCollection.name,
            callback: handleCollectionAction(CollectionActions.RENAME),
        });
    };

    const confirmDeleteCollection = () => {
        setDialogMessage({
            title: constants.DELETE_COLLECTION_TITLE,
            content: constants.DELETE_COLLECTION_MESSAGE(),
            proceed: {
                text: constants.DELETE_PHOTOS,
                action: handleCollectionAction(
                    CollectionActions.DELETE_WITH_FILES
                ),
                variant: 'danger',
            },
            secondary: {
                text: constants.KEEP_PHOTOS,
                action: handleCollectionAction(
                    CollectionActions.DELETE_BUT_KEEP_FILES
                ),
                variant: 'primary',
            },
            close: {
                text: constants.CANCEL,
            },
        });
    };

    const confirmDownloadCollection = () => {
        setDialogMessage({
            title: constants.DOWNLOAD_COLLECTION,
            content: constants.DOWNLOAD_COLLECTION_MESSAGE(),
            proceed: {
                text: constants.DOWNLOAD,
                action: handleCollectionAction(CollectionActions.DOWNLOAD),
                variant: 'accent',
            },
            close: {
                text: constants.CANCEL,
            },
        });
    };

    const confirmEmptyTrash = () =>
        setDialogMessage({
            title: constants.EMPTY_TRASH_TITLE,
            content: constants.EMPTY_TRASH_MESSAGE,

            proceed: {
                action: handleCollectionAction(CollectionActions.EMPTY_TRASH),
                text: constants.EMPTY_TRASH,
                variant: 'danger',
            },
            close: { text: constants.CANCEL },
        });

    const confirmLeaveSharedAlbum = () => {
        setDialogMessage({
            title: constants.LEAVE_SHARED_ALBUM_TITLE,
            content: constants.LEAVE_SHARED_ALBUM_MESSAGE,
            proceed: {
                text: constants.LEAVE_SHARED_ALBUM,
                action: handleCollectionAction(
                    CollectionActions.LEAVE_SHARED_ALBUM
                ),
                variant: 'danger',
            },
            close: {
                text: constants.CANCEL,
            },
        });
    };

    return (
        <HorizontalFlex sx={{ display: 'inline-flex', gap: '16px' }}>
            <QuickOptions
                handleCollectionAction={handleCollectionAction}
                collectionSummaryType={collectionSummaryType}
            />

            <OverflowMenu
                ariaControls={'collection-options'}
                triggerButtonIcon={<MoreHoriz />}>
                {collectionSummaryType === CollectionSummaryType.trash ? (
                    <TrashCollectionOption
                        handleCollectionAction={handleCollectionAction}
                    />
                ) : collectionSummaryType ===
                  CollectionSummaryType.favorites ? (
                    <OnlyDownloadCollectionOption
                        handleCollectionAction={handleCollectionAction}
                        downloadOptionText={constants.DOWNLOAD_FAVORITES}
                    />
                ) : collectionSummaryType ===
                  CollectionSummaryType.uncategorized ? (
                    <OnlyDownloadCollectionOption
                        handleCollectionAction={handleCollectionAction}
                        downloadOptionText={constants.DOWNLOAD_UNCATEGORIZED}
                    />
                ) : collectionSummaryType ===
                  CollectionSummaryType.incomingShare ? (
                    <SharedCollectionOption
                        handleCollectionAction={handleCollectionAction}
                    />
                ) : (
                    <AlbumCollectionOption
                        IsArchived={IsArchived(activeCollection)}
                        handleCollectionAction={handleCollectionAction}
                    />
                )}
            </OverflowMenu>
        </HorizontalFlex>
    );
};

export default CollectionOptions;
