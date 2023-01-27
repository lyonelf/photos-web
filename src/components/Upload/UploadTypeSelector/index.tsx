import React, { useContext, useMemo, useRef, useState } from 'react';
import constants from 'utils/strings/constants';
import { default as FileUploadIcon } from '@mui/icons-material/ImageOutlined';
import { default as FolderUploadIcon } from '@mui/icons-material/PermMediaOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { UploadTypeOption } from './option';
import DialogTitleWithCloseButton, {
    dialogCloseHandler,
} from 'components/DialogBox/TitleWithCloseButton';
import { Box, Dialog, Stack, Typography } from '@mui/material';
import { PublicCollectionGalleryContext } from 'utils/publicCollectionGallery';
import { isMobileOrTable } from 'utils/common/deviceDetection';
import { PICKED_UPLOAD_TYPE } from 'constants/upload';
import { UploadTypeSelectorContext } from 'contexts/uploadTypeSelector';
import { CustomError } from 'utils/error';

interface Iprops {
    children: React.ReactNode;
}

const isMobile = isMobileOrTable();

export default function UploadTypeSelector({ children }: Iprops) {
    const publicCollectionGalleryContext = useContext(
        PublicCollectionGalleryContext
    );

    const hideZipUploadOption = useMemo(
        () =>
            publicCollectionGalleryContext.accessedThroughSharedURL && isMobile,
        [publicCollectionGalleryContext.accessedThroughSharedURL]
    );

    const [uploadTypeSelectorView, setUploadTypeSelectorView] = useState(false);

    const uploadTypeSelectorCallbacks = useRef<{
        onUploadTypeSelect: (uploadType: PICKED_UPLOAD_TYPE) => () => void;
        onClose: () => void;
    }>({ onUploadTypeSelect: () => () => {}, onClose: () => {} });

    const openUploadTypeSelector = () => {
        setUploadTypeSelectorView(true);
    };

    const closeUploadTypeSelector = () => {
        setUploadTypeSelectorView(false);
    };

    const selectType = (options: { isPublicUpload: boolean }) =>
        new Promise<PICKED_UPLOAD_TYPE>((resolve, reject) => {
            if (options.isPublicUpload && isMobileOrTable()) {
                resolve(PICKED_UPLOAD_TYPE.FILES);
            }

            uploadTypeSelectorCallbacks.current.onUploadTypeSelect =
                (uploadType) => () => {
                    closeUploadTypeSelector();
                    resolve(uploadType);
                };

            uploadTypeSelectorCallbacks.current.onClose = () => {
                closeUploadTypeSelector();
                reject(Error(CustomError.UPLOAD_CANCELLED));
            };

            openUploadTypeSelector();
        });

    return (
        <UploadTypeSelectorContext.Provider value={{ selectType }}>
            {children}
            <Dialog
                open={uploadTypeSelectorView}
                PaperProps={{
                    sx: (theme) => ({
                        maxWidth: '375px',
                        p: 1,
                        [theme.breakpoints.down(360)]: { p: 0 },
                    }),
                }}
                onClose={dialogCloseHandler({
                    onClose: uploadTypeSelectorCallbacks.current.onClose,
                })}>
                <DialogTitleWithCloseButton onClose={closeUploadTypeSelector}>
                    {publicCollectionGalleryContext.accessedThroughSharedURL
                        ? constants.SELECT_PHOTOS
                        : constants.UPLOAD}
                </DialogTitleWithCloseButton>
                <Box p={1.5} pt={0.5}>
                    <Stack spacing={0.5}>
                        <UploadTypeOption
                            onClick={uploadTypeSelectorCallbacks.current.onUploadTypeSelect(
                                PICKED_UPLOAD_TYPE.FILES
                            )}
                            startIcon={<FileUploadIcon />}>
                            {constants.UPLOAD_FILES}
                        </UploadTypeOption>
                        <UploadTypeOption
                            onClick={uploadTypeSelectorCallbacks.current.onUploadTypeSelect(
                                PICKED_UPLOAD_TYPE.FOLDERS
                            )}
                            startIcon={<FolderUploadIcon />}>
                            {constants.UPLOAD_DIRS}
                        </UploadTypeOption>
                        {!hideZipUploadOption && (
                            <UploadTypeOption
                                onClick={uploadTypeSelectorCallbacks.current.onUploadTypeSelect(
                                    PICKED_UPLOAD_TYPE.ZIPS
                                )}
                                startIcon={<GoogleIcon />}>
                                {constants.UPLOAD_GOOGLE_TAKEOUT}
                            </UploadTypeOption>
                        )}
                    </Stack>
                    <Typography p={1.5} pt={4} color="text.secondary">
                        {constants.DRAG_AND_DROP_HINT}
                    </Typography>
                </Box>
            </Dialog>
        </UploadTypeSelectorContext.Provider>
    );
}
