import { PICKED_UPLOAD_TYPE } from 'constants/upload';
import { UploadTypeSelectorContextType } from 'contexts/uploadTypeSelector';
import isElectron from 'is-electron';
import importService from 'services/importService';
import { PublicCollectionGalleryContextType } from 'types/publicCollection';
import { ElectronFile } from 'types/upload';
import { CustomError } from 'utils/error';
import { addLogLine } from 'utils/logging';

class UploadClient {
    private isReady: boolean = false;
    private uploadTypeSelectorContext: UploadTypeSelectorContextType;
    private publicCollectionGalleryContext: PublicCollectionGalleryContextType;

    init(
        uploadTypeSelectorContext: UploadTypeSelectorContextType,
        publicCollectionGalleryContext: PublicCollectionGalleryContextType
    ) {
        this.isReady = true;
        this.uploadTypeSelectorContext = uploadTypeSelectorContext;
        this.publicCollectionGalleryContext = publicCollectionGalleryContext;
        // init upload client
    }

    public async uploadFiles() {
        // ask user to choice upload type
        if (!this.isReady) {
            throw new Error('UploadClient is not ready');
        }
        try {
            const uploadType = await this.uploadTypeSelectorContext.selectType({
                isPublicUpload:
                    this.publicCollectionGalleryContext
                        .accessedThroughSharedURL,
            });
            if (isElectron() && importService.checkAllElectronAPIsExists()) {
                this.handleDesktopUpload(uploadType);
            } else {
                // this.handleWebUpload(uploadType);
            }
        } catch (e) {
            throw Error(CustomError.UPLOAD_CANCELLED);
        }
    }

    private async handleDesktopUpload(type: PICKED_UPLOAD_TYPE) {
        let files: ElectronFile[];
        let zipPaths: string[];
        if (type === PICKED_UPLOAD_TYPE.FILES) {
            // better naming could be openFilePicker
            files = await importService.showUploadFilesDialog();
        } else if (type === PICKED_UPLOAD_TYPE.FOLDERS) {
            files = await importService.showUploadDirsDialog();
        } else {
            const response = await importService.showUploadZipDialog();
            files = response.files;
            zipPaths = response.zipPaths;
        }
        if (files?.length > 0) {
            addLogLine(
                ` desktop upload for type:${type} and fileCount: ${files?.length} requested`
            );
            console.log('files', files);
            console.log('zipPaths', zipPaths);
        }
    }

    // private async handleWebUpload(type: PICKED_UPLOAD_TYPE) {
    //     pickedUploadType.current = type;
    //     if (type === PICKED_UPLOAD_TYPE.FILES) {
    //         props.showUploadFilesDialog();
    //     } else if (type === PICKED_UPLOAD_TYPE.FOLDERS) {
    //         props.showUploadDirsDialog();
    //     } else {
    //         appContext.setDialogMessage(getDownloadAppMessage());
    //     }
    // }

    private processFilesAndUpload(
        type: PICKED_UPLOAD_TYPE,
        files: File[] | ElectronFile[]
    ) {
        addLogLine(`upload request type:${type} count ${files?.length}`);
        //     if (uploadRunning.current) {
        //         if (watchFolderService.isUploadRunning()) {
        //             addLogLine(
        //                 'watchFolder upload was running, pausing it to run user upload'
        //             );
        //             // pause watch folder service on user upload
        //             watchFolderService.pauseRunningSync();
        //         } else {
        //             addLogLine(
        //                 'an upload is already running, rejecting new upload request'
        //             );
        //             // no-op
        //             // a user upload is already in progress
        //             return;
        //         }
        //     }
        //     if (isCanvasBlocked()) {
        //         addLogLine('canvas blocked, blocking upload');
        //         appContext.setDialogMessage({
        //             title: constants.CANVAS_BLOCKED_TITLE,

        //             content: constants.CANVAS_BLOCKED_MESSAGE(),
        //             close: { text: constants.CLOSE },
        //             proceed: {
        //                 text: constants.DOWNLOAD,
        //                 action: downloadApp,
        //                 variant: 'accent',
        //             },
        //         });
        //         return;
        //     }
        //     uploadRunning.current = true;
        //     props.closeUploadTypeSelector();
        //     props.setLoading(true);
        //     if (webFiles?.length > 0) {
        //         // File selection by drag and drop or selection of file.
        //         toUploadFiles.current = webFiles;
        //         setWebFiles([]);
        //     } else if (appContext.sharedFiles?.length > 0) {
        //         toUploadFiles.current = appContext.sharedFiles;
        //         appContext.resetSharedFiles();
        //     } else if (electronFiles?.length > 0) {
        //         // File selection from desktop app
        //         toUploadFiles.current = electronFiles;
        //         setElectronFiles([]);
        //     }

        //     toUploadFiles.current = filterOutSystemFiles(toUploadFiles.current);
        //     if (toUploadFiles.current.length === 0) {
        //         props.setLoading(false);
        //         return;
        //     }

        //     const importSuggestion = getImportSuggestion(
        //         pickedUploadType.current,
        //         toUploadFiles.current
        //     );
        //     setImportSuggestion(importSuggestion);

        //     handleCollectionCreationAndUpload(
        //         importSuggestion,
        //         props.isFirstUpload,
        //         pickedUploadType.current,
        //         publicCollectionGalleryContext.accessedThroughSharedURL
        //     );
        //     pickedUploadType.current = null;
        //     props.setLoading(false);
        // }
    }
}

export default new UploadClient();
