import { PICKED_UPLOAD_TYPE } from 'constants/upload';
import { createContext } from 'react';

export interface UploadTypeSelectorContextType {
    selectType: (options: {
        isPublicUpload: boolean;
    }) => Promise<PICKED_UPLOAD_TYPE>;
}

export const UploadTypeSelectorContext =
    createContext<UploadTypeSelectorContextType>({
        selectType: () => {
            throw Error('UploadTypeSelectorContext not initialized');
        },
    });
