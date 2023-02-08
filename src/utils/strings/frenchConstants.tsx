import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import LinkButton from 'components/pages/gallery/LinkButton';
import React from 'react';
import { SuggestionType } from 'types/search';
import { formatNumberWithCommas } from '.';

/**
 * Global English constants.
 */

const dateString = function (date) {
    return new Date(date / 1000).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

const englishConstants = {
    HERO_SLIDE_1_TITLE: () => (
        <>
            <div>Private backups</div>
            <div> for your memories</div>
        </>
    ),
    HERO_SLIDE_1: 'Crypté de bout en bout par défaut',
    HERO_SLIDE_2_TITLE: () => (
        <>
            <div>Safely stored </div>
            <div>at a fallout shelter</div>
        </>
    ),
    HERO_SLIDE_2: 'Conçu pour survivre',
    HERO_SLIDE_3_TITLE: () => (
        <>
            <div>Available</div>
            <div> everywhere</div>
        </>
    ),
    HERO_SLIDE_3: 'Android, iOS, Web, Ordinateur',
    COMPANY_NAME: 'ente',
    LOGIN: 'Connexion',
    SIGN_UP: 'Inscription',
    NEW_USER: 'Nouveau sur ente',
    EXISTING_USER: 'Utilisateur existant',
    NAME: 'Nom',
    ENTER_NAME: 'Saisir un nom',
    PUBLIC_UPLOADER_NAME_MESSAGE:
        'Ajouter un nom afin que vos amis sachent qui remercier pour ces magnifiques photos!',
    EMAIL: 'E-mail',
    ENTER_EMAIL: 'Saisir l''adresse e-mail',
    DATA_DISCLAIMER: "Nous ne partagerons jamais vos données avec qui que ce soit.",
    SUBMIT: 'Soumettre',
    EMAIL_ERROR: 'Saisir un e-mail valide',
    REQUIRED: 'Nécessaire',
    VERIFY_EMAIL: 'Vérifier l''e-mail',
    EMAIL_SENT: ({ email }) => (
        <span>
            Verification code sent to{' '}
            <Typography
                component={'span'}
                fontSize="inherit"
                color="text.secondary">
                {email}
            </Typography>
        </span>
    ),
    CHECK_INBOX: 'Veuillez consulter votre boite de réception (et indésirables) pour poursuivre la vérification',
    ENTER_OTT: 'Code de vérification',
    RESEND_MAIL: 'envoyer le code',
    VERIFY: 'Vérifier',
    UNKNOWN_ERROR: 'Quelque chose s''est mal passé, veuillez recommencer',
    INVALID_CODE: 'Code de vérification non valide',
    EXPIRED_CODE: 'Votre code de vérification a expiré',
    SENDING: 'Envoi...',
    SENT: 'Envoyé!',
    PASSWORD: 'Mot de passe',
    LINK_PASSWORD: 'Saisir le mot de passe pour déverrouiller l''album',
    ENTER_PASSPHRASE: 'Saisir votre mot de passe',
    RETURN_PASSPHRASE_HINT: 'Mot de passe',
    SET_PASSPHRASE: 'Définir le mot de passe',
    VERIFY_PASSPHRASE: 'Connexion',
    INCORRECT_PASSPHRASE: 'Mot de passe non valide',
    ENTER_ENC_PASSPHRASE:
        'Veuillez saisir un mot de passe que nous pourrons utiliser pour crypter vos données',
    PASSPHRASE_DISCLAIMER: () => (
        <>
            Nous ne stockons pas votre mot de passe, donc si vous le perdez,{' '}
            <strong>nous ne pourrons pas vous aider</strong>
            à récupérer vos données sans une clé de récupération.
        </>
    ),
    KEY_GENERATION_IN_PROGRESS_MESSAGE: 'Génération des clés de cryptage...',
    PASSPHRASE_HINT: 'Mot de passe',
    CONFIRM_PASSPHRASE: 'Confirmer le mot de passe',
    PASSPHRASE_MATCH_ERROR: "Les mots de passe ne correspondent pas",
    CONSOLE_WARNING_STOP: 'STOP!',
    CONSOLE_WARNING_DESC:
        "Ceci est une fonction de navigateur dédiée aux développeurs. Veuillez ne pas copier-coller un code non vérifié à cet endroit.",
    SELECT_COLLECTION: 'Choisir un album à charge vers',
    CREATE_COLLECTION: 'Nouvel album',
    ENTER_ALBUM_NAME: 'Nom de l''album',
    CLOSE_OPTION: 'Fermer (Échap)',
    ENTER_FILE_NAME: 'Nom du fichier',
    CLOSE: 'Fermer',
    NO: 'Non',
    NOTHING_HERE: 'Il n''y a encore rien à voir ici 👀',
    UPLOAD: 'Charger',
    ADD_MORE_PHOTOS: 'Ajouter plus de photos',
    ADD_PHOTOS: 'Ajouter des photos',
    SELECT_PHOTOS: 'Sélectionner des photos',
    FILE_UPLOAD: 'Fichier chargé',
    UPLOAD_STAGE_MESSAGE: {
        0: 'Préparation du chargement',
        1: 'Lire les fichiers métadonnées de Google',
        2: (fileCounter) =>
            `${fileCounter.finished} / ${fileCounter.total} files metadata extracted`,
        3: (fileCounter) =>
            `${fileCounter.finished} / ${fileCounter.total} files backed up`,
        4: 'Annulation des chargements restants',
        5: 'Sauvegarde terminée',
    },
    UPLOADING_FILES: 'Chargement de fichiers',
    FILE_NOT_UPLOADED_LIST: 'Les fichiers suivants n''ont pas été chargés',
    SUBSCRIPTION_EXPIRED: 'Abonnement expiré',
    SUBSCRIPTION_EXPIRED_MESSAGE: (onClick) => (
        <>
            Votre abonnement a expiré, veuillez{' '}
            <LinkButton onClick={onClick}> le renouvelleer </LinkButton>
        </>
    ),
    STORAGE_QUOTA_EXCEEDED: 'Limite de stockage atteinte',
    INITIAL_LOAD_DELAY_WARNING: 'La première consultation peut prendre du temps',
    USER_DOES_NOT_EXIST: 'Désolé, impossible de trouver un utilisateur avec cet e-mail',
    UPLOAD_BUTTON_TEXT: 'Charger',
    NO_ACCOUNT: "Je n''ai pas de compte",
    ACCOUNT_EXISTS: 'J''ai déjà un compte',
    ALBUM_NAME: 'Nom de l''album',
    CREATE: 'Créer',
    DOWNLOAD: 'Télécharger',
    DOWNLOAD_OPTION: 'Télécharger (D)',
    DOWNLOAD_FAVORITES: 'Télécharger les favoris',
    DOWNLOAD_UNCATEGORIZED: 'Télécharger les hors catégories',
    COPY_OPTION: 'Copier en PNG (Ctrl/Cmd - C)',
    TOGGLE_FULLSCREEN: 'Plein écran (F)',
    ZOOM_IN_OUT: 'Zoom in/out',
    PREVIOUS: 'Précédent (←)',
    NEXT: 'Suivant (→)',
    NO_INTERNET_CONNECTION:
        'Veuillez vérifier votre connexion internet puis réessayer',
    TITLE: 'ente Photos',
    UPLOAD_FIRST_PHOTO_DESCRIPTION: () => (
        <>
            Protégez votre premier souvenir avec<strong> ente </strong>
        </>
    ),
    UPLOAD_FIRST_PHOTO: 'Protéger',
    UPLOAD_DROPZONE_MESSAGE: 'Drop to backup your files',
    WATCH_FOLDER_DROPZONE_MESSAGE: 'Drop to add watched folder',
    TRASH_FILES_TITLE: 'Supprimer les fichiers?',
    TRASH_FILE_TITLE: 'Supprimer le fichier?',
    DELETE_FILES_TITLE: 'Supprimer immédiatement?',
    DELETE_FILES_MESSAGE:
        'Les fichiers sélectionnés seront définitivement supprimés de votre compte ente.',
    DELETE_FILE: 'Supprimer les fichiers',
    DELETE: 'Supprimer',
    DELETE_OPTION: 'Supprimer (DEL)',
    FAVORITE: 'Favori',
    FAVORITE_OPTION: 'Favori (L)',
    UNFAVORITE_OPTION: 'Non favori (L)',
    UNFAVORITE: 'Non favori',
    MULTI_FOLDER_UPLOAD: 'Plusieurs dossiers détectés',
    UPLOAD_STRATEGY_CHOICE: 'Voulez-vous les charger dans',
    UPLOAD_STRATEGY_SINGLE_COLLECTION: 'Un seul album',
    OR: 'ou',
    UPLOAD_STRATEGY_COLLECTION_PER_FOLDER: 'Albums séparés',
    SESSION_EXPIRED_MESSAGE:
        'Votre session a expiré, veuillez vous reconnecter pour poursuivre',
    SESSION_EXPIRED: 'Session expiré',
    SYNC_FAILED: 'Échec de synchronisation avec le serveur, veuillez rafraîchir la page',
    PASSWORD_GENERATION_FAILED:
        "Votre navigateur ne permet pas de générer une clé forte correspondant aux standards de cryptage de ente, veuillez réessayer en utilisant l'appli mobile ou un autre navigateur",
    CHANGE_PASSWORD: 'Modifier le mot de passe',
    GO_BACK: 'Retour',
    RECOVERY_KEY: 'Clé de récupération',
    SAVE_LATER: 'Plus tard',
    SAVE: 'Sauvegarder la clé',
    RECOVERY_KEY_DESCRIPTION:
        'Si vous oubliez votre mot de passe, la seule façon de récupérer vos données est grâce à cette clé.',
    RECOVER_KEY_GENERATION_FAILED:
        'Le code de récupération ne peut être généré, veuillez réessayer',
    KEY_NOT_STORED_DISCLAIMER:
        "Nous ne stockons pas cette clé, veuillez donc la sauvegarder dans un endroit sûr",
    FORGOT_PASSWORD: 'Mot de passe oublié',
    RECOVER_ACCOUNT: 'Récupérer le compte',
    RECOVERY_KEY_HINT: 'Clé de récupération',
    RECOVER: 'Récupérer',
    NO_RECOVERY_KEY: 'Pas de clé de récuparation?',
    INCORRECT_RECOVERY_KEY: 'Clé de récupération non valide',
    SORRY: 'Désolé',
    NO_RECOVERY_KEY_MESSAGE:
        'En raison de notre protocole de cryptage de bout en bout, vos données ne peuvent être décryptées sans votre mot de passe ou clé de récupération',
    NO_TWO_FACTOR_RECOVERY_KEY_MESSAGE: () => (
        <>
            Veuillez envoyer un e-mail à{' '}
            <a href="mailto:support@ente.io">support@ente.io</a> depuis votre
            adresse enregistrée
        </>
    ),
    CONTACT_SUPPORT: 'Contacter le support',
    REQUEST_FEATURE: 'Soumettre une idée',
    SUPPORT: 'Support',
    CONFIRM: 'Confirmer',
    SKIP_SUBSCRIPTION_PURCHASE: 'Poursuivre avec l''option gratuite',
    CANCEL: 'Annuler',
    LOGOUT: 'Déconnexion',
    DELETE_ACCOUNT: 'Supprimer le compte',
    DELETE_ACCOUNT_MESSAGE: () => (
        <>
            <p>
                Veuillez envoyer un e-mail à{' '}
                <Link href="mailto:account-deletion@ente.io">
                    account-deletion@ente.io
                </Link>{' '}
                depuis votre
            adresse enregistrée.{' '}
            </p>
            <p>Votre demande sera traitée dans les 72 heures.</p>
        </>
    ),
    LOGOUT_MESSAGE: 'Voulez-vous vraiment vous déconnecter?',
    CHANGE: 'Modifier',
    CHANGE_EMAIL: 'Modifier l''e-mail',
    OK: 'OK',
    SUCCESS: 'Parfait',
    ERROR: 'Erreur',
    MESSAGE: 'Message',
    INSTALL_MOBILE_APP: () => (
        <>
            Installez notre application{' '}
            <a
                href="https://play.google.com/store/apps/details?id=io.ente.photos"
                target="_blank"
                style={{ color: '#51cd7c' }}
                rel="noreferrer">
                Android
            </a>{' '}
            ou{' '}
            <a
                href="https://apps.apple.com/in/app/ente-photos/id1542026904"
                style={{ color: '#51cd7c' }}
                target="_blank"
                rel="noreferrer">
                iOS {' '}
            </a>
            pour sauvegarder automatiquement toutes vos photos
        </>
    ),
    DOWNLOAD_APP_MESSAGE:
        'Désolé, cette opération est actuellement supportée uniquement sur notre appli pour ordinateur',
    DOWNLOAD_APP: 'Télécharger l''appli pour ordinateur',
    EXPORT: 'Exporter des données',

    // ========================
    // Subscription
    // ========================
    SUBSCRIPTION: 'Abonnement',
    SUBSCRIBE: 'S''abonner',
    SUBSCRIPTION_PLAN: 'Plan d''abonnement',
    USAGE_DETAILS: 'Utilisation',
    MANAGE: 'Gérer',
    MANAGEMENT_PORTAL: 'Gérer le mode de paiement',
    MANAGE_FAMILY_PORTAL: 'Gérer la famille',
    LEAVE_FAMILY_PLAN: 'Quitter le plan famille',
    LEAVE: 'Quitter',
    LEAVE_FAMILY_CONFIRM: 'Êtes-vous certains de vouloir quitter le plan famille?',
    CHOOSE_PLAN: 'Choisir votre plan',
    MANAGE_PLAN: 'Gérer votre abonnement',
    ACTIVE: 'Actif',

    OFFLINE_MSG: 'Vous êtes hors-ligne, les mémoires cache sont affichées',

    FREE_SUBSCRIPTION_INFO: (expiryTime) => (
        <>
            Vous êtes sur le plan <strong>gratuit</strong> qui expire le{' '}
            {dateString(expiryTime)}
        </>
    ),

    FAMILY_SUBSCRIPTION_INFO: 'Vous êtes sur le plan famille géré par',

    RENEWAL_ACTIVE_SUBSCRIPTION_STATUS: (expiryTime) => (
        <>Renouveller le {dateString(expiryTime)}</>
    ),
    RENEWAL_CANCELLED_SUBSCRIPTION_STATUS: (expiryTime) => (
        <>Pris fin le {dateString(expiryTime)}</>
    ),

    RENEWAL_CANCELLED_SUBSCRIPTION_INFO: (expiryTime) => (
        <>Votre abonnement sera annulé le {dateString(expiryTime)}</>
    ),

    STORAGE_QUOTA_EXCEEDED_SUBSCRIPTION_INFO: (onClick) => (
        <>
            Vous avez dépassé votre quota de stockage,, veuillez{' '}
            <LinkButton onClick={onClick}>mettre à  niveau</LinkButton>
        </>
    ),
    SUBSCRIPTION_PURCHASE_SUCCESS: (expiryTime) => (
        <>
            <p>Nous avons reçu votre paiement</p>
            <p>
                Votre abonnement est valide jusqu''au{' '}
                <strong>{dateString(expiryTime)}</strong>
            </p>
        </>
    ),
    SUBSCRIPTION_PURCHASE_CANCELLED:
        'Votre achat est annulé, veuillez réessayer si vous souhaitez vous abonner',
    SUBSCRIPTION_VERIFICATION_FAILED:
        'Nous ne sommes pas encore en mesure de vérifier votre achat, cela peut prendre quelques heures',
    SUBSCRIPTION_PURCHASE_FAILED:
        'Échec lors de l''achat de l''abonnement, veuillez réessayer',
    SUBSCRIPTION_UPDATE_FAILED:
        'Échec lors de la mise à niveau de l''abonnement, veuillez réessayer',
    UPDATE_PAYMENT_METHOD_MESSAGE:
        'Désolé, échec de paiement lors de la saisie de votre carte, veuillez mettr eà jour votre moyen de paiement et réessayer',
    STRIPE_AUTHENTICATION_FAILED:
        'Nous n''avons pas pu authentifier votre moyen de paiement. Veuillez choisir un moyen différent et réessayer',
    UPDATE_PAYMENT_METHOD: 'Mise à jour du moyen de paiement',
    MONTHLY: 'Mensuel',
    YEARLY: 'Annuel',
    UPDATE_SUBSCRIPTION_MESSAGE: 'Êtes-vous certains de vouloir changer de plan?',
    UPDATE_SUBSCRIPTION: 'Changer de plan',

    CANCEL_SUBSCRIPTION: 'Annuler l''abonnement',
    CANCEL_SUBSCRIPTION_MESSAGE: () => (
        <>
            <p>
                Toutes vos données seront supprimées de nos serveurs à la fin de cette période d'abonnement.
            </p>
            <p>Voulez-vous vraiment annuler votre abonnement?</p>
        </>
    ),
    SUBSCRIPTION_CANCEL_FAILED: 'Échec lors de l''annulation de l''abonnement',
    SUBSCRIPTION_CANCEL_SUCCESS: 'Votre abonnement a bien été annulé',

    REACTIVATE_SUBSCRIPTION: 'Réactiver l''abonnement',
    REACTIVATE_SUBSCRIPTION_MESSAGE: (expiryTime) =>
        `Une fois réactivée, vous serrez facturé de ${dateString(expiryTime)}`,
    SUBSCRIPTION_ACTIVATE_SUCCESS: 'Votre abonnement est bien activé',
    SUBSCRIPTION_ACTIVATE_FAILED: 'Échec lors de la réactivation de l''abonnement',

    SUBSCRIPTION_PURCHASE_SUCCESS_TITLE: 'Merci',
    CANCEL_SUBSCRIPTION_ON_MOBILE: 'Annuler l''abonnement mobile',
    CANCEL_SUBSCRIPTION_ON_MOBILE_MESSAGE:
        'Veuillez annuler votre abonnement depuis l''appli mobile pour activer un abonnement ici',
    MAIL_TO_MANAGE_SUBSCRIPTION: (
        <>
            Veuillez nous contacter à{' '}
            <Link href={`mailto:support@ente.io`}>support@ente.io</Link> pour
            gérer votre abonnement
        </>
    ),
    RENAME: 'Renommer',
    RENAME_FILE: 'Renommer le fichier',
    RENAME_COLLECTION: 'Renommer l''album',
    DELETE_COLLECTION_TITLE: 'Supprimer l''album?',
    DELETE_COLLECTION: 'Supprimer l''album',
    DELETE_COLLECTION_FAILED: 'L''album n''a pas pu être supprimé, veuillez réessayer',
    DELETE_COLLECTION_MESSAGE: () => (
        <p>
            Supprimer aussi les photos (et vidéos) présentes dans cet album depuis
            <span style={{ color: '#fff' }}> tous </span> les autres albums dont ils font partie?
        </p>
    ),
    DELETE_PHOTOS: 'Supprimer des photos',
    KEEP_PHOTOS: 'Conserver des photos',
    SHARE: 'Partager',
    SHARE_COLLECTION: 'Partager l''album',
    SHARE_WITH_PEOPLE: 'Partager avec vos proches',
    SHAREES: 'Partager avec',
    PUBLIC_URL: 'Lien public',
    SHARE_WITH_SELF: 'Oups, vous ne pouvez pas partager avec  vous même',
    ALREADY_SHARED: (email) =>
        `Oups, vous partager déjà cela avec ${email}`,
    SHARING_BAD_REQUEST_ERROR: 'Partage d''album non autorisé',
    SHARING_DISABLED_FOR_FREE_ACCOUNTS: 'Le partage est désactivé pour les comptes gratuits',
    DOWNLOAD_COLLECTION: 'Télécharger l''album',
    DOWNLOAD_COLLECTION_MESSAGE: () => (
        <>
            <p>Êtes-vous certains de vouloir télécharger l''album complet?</p>
            <p>Tous les fichiers seront mis en file d''attente pour un téléchargement fractionné</p>
        </>
    ),
    DOWNLOAD_COLLECTION_FAILED: 'Échec de téléchargement de l''album, veuillez réessayer',
    CREATE_ALBUM_FAILED: 'Échec de création de l''album , veuillez réessayer',

    SEARCH_RESULTS: 'Résultats de la recherche',
    SEARCH_HINT: () => <span>Recherche d''albums, dates ...</span>,
    SEARCH_TYPE: (type: SuggestionType) => {
        switch (type) {
            case SuggestionType.COLLECTION:
                return 'Album';
            case SuggestionType.LOCATION:
                return 'Location';
            case SuggestionType.DATE:
                return 'Date';
            case SuggestionType.IMAGE:
            case SuggestionType.VIDEO:
                return 'File';
        }
    },
    PHOTO_COUNT: (count: number) =>
        `${
            count === 1
                ? `1 memory`
                : `${formatNumberWithCommas(count)} memories`
        }`,
    TERMS_AND_CONDITIONS: () => (
        <Typography variant="body2">
            I agree to the{' '}
            <Link href="https://ente.io/terms" target="_blank" rel="noreferrer">
                terms
            </Link>{' '}
            and{' '}
            <Link
                href="https://ente.io/privacy"
                target="_blank"
                rel="noreferrer">
                privacy policy
            </Link>{' '}
        </Typography>
    ),
    CONFIRM_PASSWORD_NOT_SAVED: () => (
        <p>
            Je comprend que si je perd le mot de passe,je peux perdre mes données puisque mes données sont
            {' '}
            <a
                href="https://ente.io/architecture"
                target="_blank"
                rel="noreferrer">
                cryptées de bout en bout
            </a>{' '}
            avec ente
        </p>
    ),
    NOT_FILE_OWNER: 'Vous ne pouvez pas supprimer les fichiers d''un album partagé',
    ADD_TO_COLLECTION: 'Ajouter à l''album',
    SELECTED: 'sélectionné',
    VIDEO_PLAYBACK_FAILED: 'Le format vidéo n''est pas supporté',
    VIDEO_PLAYBACK_FAILED_DOWNLOAD_INSTEAD:
        'Cette vidéo ne peut pas être lue sur votre navigateur',
    METADATA: 'Metadonnées',
    INFO: 'Info ',
    INFO_OPTION: 'Info (I)',
    FILE_ID: 'ID fichier',
    FILE_NAME: 'Nom de fichier',
    CAPTION: 'Description',
    CAPTION_PLACEHOLDER: 'Ajouter une description',
    CREATION_TIME: 'Heure de création',
    UPDATED_ON: 'Mis à jour le',
    LOCATION: 'Emplacement',
    SHOW_ON_MAP: 'Visualiser sur OpenStreetMap',
    DETAILS: 'Détails',
    VIEW_EXIF: 'Visualiser toutes les données EXIF',
    NO_EXIF: 'Aucune donnée EXIF',
    EXIF: 'EXIF',
    DEVICE: 'Appareil',
    IMAGE_SIZE: 'Taille de l''image',
    FLASH: 'Flash',
    FOCAL_LENGTH: 'Distance focale',
    APERTURE: 'Ouverture',
    ISO: 'ISO',
    SHOW_ALL: 'Afficher tout',
    LOGIN_TO_UPLOAD_FILES: (count: number) =>
        count === 1
            ? `1 fichier reçu. Connectez-vous pour le charger`
            : `${count} fichiers reçus. Connectez-vous pour les charger`,
    FILES_TO_BE_UPLOADED: (count: number) =>
        count === 1
            ? `1 fichier reçu. Chargement en tant que jiffy`
            : `${count} fichiers reçus. Chargement en tant que jiffy`,
    TWO_FACTOR: 'Double authentification',
    TWO_FACTOR_AUTHENTICATION: 'Authentification double-facteur',
    TWO_FACTOR_QR_INSTRUCTION:
        'Scannez le QRCode ci-dessous avec une appli d''authentification (ex: FreeOTP) ',
    ENTER_CODE_MANUALLY: 'Saisir le code manuellement',
    TWO_FACTOR_MANUAL_CODE_INSTRUCTION:
        'Veuillez saisir ce code dans votre appli d''authentification',
    SCAN_QR_CODE: 'Scannez le QRCode de préférence',
    CONTINUE: 'Continuer',
    BACK: 'Retour',
    ENABLE_TWO_FACTOR: 'Activer la double-authentification',
    ENABLE: 'Activer',
    LOST_DEVICE: 'Perte de l''appareil identificateur',
    INCORRECT_CODE: 'Code non valide',
    RECOVER_TWO_FACTOR: 'Récupérer la double-authentification',
    TWO_FACTOR_INFO:
        'Ajouter une couche de sécurité supplémentaire afin de nécessiter plus que simplement votre e-mail et mot de passe pour vous connecter à votre compte',
    DISABLE_TWO_FACTOR_LABEL: 'Désactiver la double-authentification',
    UPDATE_TWO_FACTOR_LABEL: 'Mise à jour de votre appareil identificateur',
    DISABLE: 'Désactiver',
    RECONFIGURE: 'Reconfigurer',
    UPDATE_TWO_FACTOR: 'Mise à jour de la double-authentification',
    UPDATE_TWO_FACTOR_MESSAGE:
        'Continuer annulera tous les identificateurs précédemment configurés',
    UPDATE: 'Mise à jour',
    DISABLE_TWO_FACTOR: 'Désactiver la double-authentification',
    DISABLE_TWO_FACTOR_MESSAGE:
        'Êtes-vous certains de vouloir désactiver la double-authentification',
    TWO_FACTOR_SETUP_FAILED: 'Échec de configuration de la double-authentification, veuillez réessayer',
    TWO_FACTOR_SETUP_SUCCESS:
        'La double-authentification est configurée',
    TWO_FACTOR_DISABLE_SUCCESS: 'La double-authentification est désactivée',
    TWO_FACTOR_DISABLE_FAILED: 'Échec de désactivation de la double-authentification, veuillez réessayer',
    EXPORT_DATA: 'Exporter les données',
    SELECT_FOLDER: 'Sélectionner un dossier',
    DESTINATION: 'Destination',
    EXPORT_SIZE: 'Taille d''export',
    START: 'Démarrer',
    EXPORT_IN_PROGRESS: 'Export en cours...',
    PAUSE: 'Pause',
    RESUME: 'Reprendre',
    MINIMIZE: 'Réduire',
    LAST_EXPORT_TIME: 'Horaire du dernier export',
    SUCCESSFULLY_EXPORTED_FILES: 'Exports effectués',
    FAILED_EXPORTED_FILES: 'Échec des exports',
    EXPORT_AGAIN: 'Resynchro',
    RETRY_EXPORT_: 'Réessayer les exports ayant échoués',
    LOCAL_STORAGE_NOT_ACCESSIBLE: 'Stockage local non accessible',
    LOCAL_STORAGE_NOT_ACCESSIBLE_MESSAGE:
        'Votre navigateur ou un complément bloque ente qui ne peut sauvegarder les données sur votre stockage local. Veuillez relancer cette page après avoir changé de mode de navigation.',
    RETRY: 'Réessayer',
    SEND_OTT: 'Envoyer OTP',
    EMAIl_ALREADY_OWNED: 'Cet e-mail est déjà pris',
    EMAIL_UDPATE_SUCCESSFUL: 'Votre e-mail a été mis à jour',
    UPLOAD_FAILED: 'Échec du chargement',
    ETAGS_BLOCKED: (link: string) => (
        <>
            <Box mb={1}>
                Nosu n''avons pas pu charger les fichiers suivants à cause de la configuration de votre navigateur
               .
            </Box>
            <Box>
                Veuillez désactiver tous les compléments qui pourraient empêcher ente d''utiliser
                 les<code>eTags</code> pour charger de larges fichiers, ou bien utilisez notre{' '}
                <Link href={link} target="_blank">
                    appli pour ordinateur
                </Link>{' '}
                pour une meilleure expérience lors des chargements.
            </Box>
        </>
    ),
    SKIPPED_VIDEOS_INFO: (link: string) => (
        <>
            <Box mb={1}>
                Actuellement, nous ne supportons pas l''ajout de videos via des liens publics.{' '}
            </Box>
            <Box>
                Pour partager des vidéos, veuillez{' '}
                <Link href={link} target="_blank">
                    vous connecter à
                </Link>{' '}
                 ente et partager en utilisant l''e-mail concerné
                .
            </Box>
        </>
    ),

    LIVE_PHOTOS_DETECTED:
        'Les fichiers photos et vidéos depuis votre espace Live Photos ont été fusionnés en un seul fichier',

    RETRY_FAILED: 'Réessayer les chargements ayant échoués',
    FAILED_UPLOADS: 'Chargements échoués ',
    SKIPPED_FILES: 'Chargements ignorés',
    THUMBNAIL_GENERATION_FAILED_UPLOADS: 'Échec de création d''une miniature',
    UNSUPPORTED_FILES: 'Fichiers non supportés',
    SUCCESSFUL_UPLOADS: 'Chargements réussis',
    SKIPPED_INFO:
        'Ignorer ceux-ci car il y a des fichiers avec des noms identiques dans le même album',
    UNSUPPORTED_INFO: 'ente ne supporte pas encore ces formats de fichiers',
    BLOCKED_UPLOADS: 'Chargements bloqués',
    SKIPPED_VIDEOS: 'Vidéos ignorées',
    INPROGRESS_METADATA_EXTRACTION: 'En cours',
    INPROGRESS_UPLOADS: 'Chargements en cours',
    TOO_LARGE_UPLOADS: 'Gros fichiers',
    LARGER_THAN_AVAILABLE_STORAGE_UPLOADS: 'Stockage insuffisant',
    LARGER_THAN_AVAILABLE_STORAGE_INFO:
        'These files were not uploaded as they exceed the maximum size limit for your storage plan',
    TOO_LARGE_INFO:
        'These files were not uploaded as they exceed our maximum file size limit',
    THUMBNAIL_GENERATION_FAILED_INFO:
        'These files were uploaded, but unfortunately we could not generate the thumbnails for them.',
    UPLOAD_TO_COLLECTION: 'Upload to album',
    UNCATEGORIZED: 'Uncategorized',
    MOVE_TO_UNCATEGORIZED: 'Move to uncategorized',
    ARCHIVE: 'Archive',
    ARCHIVE_COLLECTION: 'Archive album',
    ARCHIVE_SECTION_NAME: 'Archive',
    ALL_SECTION_NAME: 'All',
    MOVE_TO_COLLECTION: 'Move to album',
    UNARCHIVE: 'Unarchive',
    UNARCHIVE_COLLECTION: 'Unarchive album',
    MOVE: 'Move',
    ADD: 'Add',
    SORT: 'Sort',
    REMOVE: 'Remove',
    YES_REMOVE: 'Yes, remove',
    CONFIRM_REMOVE: 'Confirm removal',
    REMOVE_FROM_COLLECTION: 'Remove from album',
    TRASH: 'Trash',
    MOVE_TO_TRASH: 'Move to trash',
    TRASH_FILES_MESSAGE:
        'Selected files will be removed from all albums and moved to trash.',
    TRASH_FILE_MESSAGE:
        'The file will be removed from all albums and moved to trash.',
    DELETE_PERMANENTLY: 'Delete permanently',
    RESTORE: 'Restore',
    CONFIRM_RESTORE: 'Confirm restoration',
    RESTORE_MESSAGE: 'Restore selected files ?',
    RESTORE_TO_COLLECTION: 'Restore to album',
    EMPTY_TRASH: 'Empty trash',
    EMPTY_TRASH_TITLE: 'Empty trash?',
    EMPTY_TRASH_MESSAGE:
        'These files will be permanently deleted from your ente account.',
    LEAVE_SHARED_ALBUM: 'Yes, leave',
    LEAVE_ALBUM: 'Leave album',
    LEAVE_SHARED_ALBUM_TITLE: 'Leave shared album?',
    LEAVE_SHARED_ALBUM_FAILED: 'failed to leave the album, please try again',
    LEAVE_SHARED_ALBUM_MESSAGE:
        'You will leave the album, and it will stop being visible to you.',
    CONFIRM_SELF_REMOVE_MESSAGE: () => (
        <>
            <p>
                Selected items will be removed from this album. Items which are
                only in this album will be moved to Uncategorized.
            </p>
        </>
    ),
    CONFIRM_SELF_AND_OTHER_REMOVE_MESSAGE: () => (
        <>
            <p>
                Some of the items you are removing were added by other people,
                and you will lose access to them.
            </p>
        </>
    ),

    SORT_BY_CREATION_TIME_ASCENDING: 'Oldest',
    SORT_BY_CREATION_TIME_DESCENDING: 'Newest',
    SORT_BY_UPDATION_TIME_DESCENDING: 'Last updated',
    SORT_BY_NAME: 'Name',
    COMPRESS_THUMBNAILS: 'Compress thumbnails',
    THUMBNAIL_REPLACED: 'Thumbnails compressed',
    FIX_THUMBNAIL: 'Compress',
    FIX_THUMBNAIL_LATER: 'Compress later',
    REPLACE_THUMBNAIL_NOT_STARTED: () => (
        <>
            Some of your videos thumbnails can be compressed to save space.
            would you like ente to compress them?
        </>
    ),
    REPLACE_THUMBNAIL_COMPLETED: () => (
        <>Successfully compressed all thumbnails</>
    ),
    REPLACE_THUMBNAIL_NOOP: () => (
        <>You have no thumbnails that can be compressed further</>
    ),
    REPLACE_THUMBNAIL_COMPLETED_WITH_ERROR: () => (
        <>Could not compress some of your thumbnails, please retry</>
    ),
    FIX_CREATION_TIME: 'Fix time',
    FIX_CREATION_TIME_IN_PROGRESS: 'Fixing time',
    CREATION_TIME_UPDATED: `File time updated`,

    UPDATE_CREATION_TIME_NOT_STARTED: () => (
        <>Select the option you want to use</>
    ),
    UPDATE_CREATION_TIME_COMPLETED: () => <>Successfully updated all files</>,

    UPDATE_CREATION_TIME_COMPLETED_WITH_ERROR: () => (
        <>File time updation failed for some files, please retry</>
    ),
    FILE_NAME_CHARACTER_LIMIT: '100 characters max',
    CAPTION_CHARACTER_LIMIT: '5000 characters max',

    DATE_TIME_ORIGINAL: 'EXIF:DateTimeOriginal',
    DATE_TIME_DIGITIZED: 'EXIF:DateTimeDigitized',
    CUSTOM_TIME: 'Custom time',
    REOPEN_PLAN_SELECTOR_MODAL: 'Re-open plans',
    OPEN_PLAN_SELECTOR_MODAL_FAILED: 'Failed to open plans',
    COMMENT: 'Comment',
    ABUSE_REPORT_DESCRIPTION:
        'Submitting this report will notify the album owner.',
    OTHER_REASON_REQUIRES_COMMENTS:
        'Reason = other, require  a mandatory comment ',
    REPORT_SUBMIT_SUCCESS_CONTENT: 'Your report has been submitted',
    REPORT_SUBMIT_SUCCESS_TITLE: 'Report sent',
    REPORT_SUBMIT_FAILED: 'Failed to sent report, try again',
    INSTALL: 'Install',
    ALBUM_URL: 'Album url',
    PUBLIC_SHARING: 'Public link',
    SHARING_DETAILS: 'Sharing details',
    MODIFY_SHARING: 'Modify sharing',
    NOT_FOUND: '404 - not found',
    LINK_EXPIRED: 'Link expired',
    LINK_EXPIRED_MESSAGE: 'This link has either expired or been disabled!',
    MANAGE_LINK: 'Manage link',
    LINK_TOO_MANY_REQUESTS: 'This album is too popular for us to handle!',
    DISABLE_PUBLIC_SHARING: 'Disable public sharing',
    DISABLE_PUBLIC_SHARING_MESSAGE:
        'Are you sure you want to disable public sharing?',
    FILE_DOWNLOAD: 'Allow downloads',
    LINK_PASSWORD_LOCK: 'Password lock',
    PUBLIC_COLLECT: 'Allow adding photos',
    LINK_DEVICE_LIMIT: 'Device limit',
    LINK_EXPIRY: 'Link expiry',
    LINK_EXPIRY_NEVER: 'Never',
    DISABLE_FILE_DOWNLOAD: 'Disable download',
    DISABLE_FILE_DOWNLOAD_MESSAGE: () => (
        <>
            <p>
                Are you sure that you want to disable the download button for
                files?{' '}
            </p>{' '}
            <p>
                Viewers can still take screenshots or save a copy of your photos
                using external tools{' '}
            </p>
        </>
    ),
    ABUSE_REPORT: 'Abuse report',
    ABUSE_REPORT_BUTTON_TEXT: 'Report abuse?',
    MALICIOUS_CONTENT: 'Contains malicious content',
    COPYRIGHT:
        'Infringes on the copyright of someone I am authorized to represent',
    ENTER_EMAIL_ADDRESS: 'Email*',
    SELECT_REASON: 'Select a reason*',
    ENTER_FULL_NAME: 'Full name*',
    ENTER_DIGITAL_SIGNATURE:
        'Typing your full name in this box will act as your digital signature*',
    ENTER_ON_BEHALF_OF: 'I am reporting on behalf of*',
    ENTER_ADDRESS: 'Address*',
    ENTER_JOB_TITLE: 'Job title*',
    ENTER_CITY: 'City*',
    ENTER_PHONE: 'Phone number*',

    ENTER_STATE: 'State*',
    ENTER_POSTAL_CODE: 'Zip/postal code*',
    ENTER_COUNTRY: 'Country*',
    JUDICIAL_DESCRIPTION: () => (
        <>
            By checking the following boxes, I state{' '}
            <strong>UNDER PENALTY OF PERJURY </strong>of law that:
        </>
    ),
    TERM_1: 'I hereby state that I have a good faith belief that the sharing of copyrighted material at the location above is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use). ',
    TERM_2: 'I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of, the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed. ',
    TERM_3: 'I acknowledge that any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability for damages. ',
    SHARED_USING: 'Shared using ',
    ENTE_IO: 'ente.io',
    LIVE: 'LIVE',
    DISABLE_PASSWORD: 'Disable password lock',
    DISABLE_PASSWORD_MESSAGE:
        'Are you sure that you want to disable the password lock?',
    PASSWORD_LOCK: 'Password lock',
    LOCK: 'Lock',
    DOWNLOAD_UPLOAD_LOGS: 'Debug logs',
    CHOOSE_UPLOAD_TYPE: 'Upload',
    UPLOAD_FILES: 'File',
    UPLOAD_DIRS: 'Folder',
    UPLOAD_GOOGLE_TAKEOUT: 'Google takeout',
    CANCEL_UPLOADS: 'Cancel uploads',
    DEDUPLICATE_FILES: 'Deduplicate files',
    NO_DUPLICATES_FOUND: "You've no duplicate files that can be cleared",
    CLUB_BY_CAPTURE_TIME: 'Club by capture time',
    FILES: 'Files',
    EACH: 'Each',
    DEDUPLICATION_LOGIC_MESSAGE: (captureTime: boolean) => (
        <>
            The following files were clubbed based on their sizes
            {captureTime && ' and capture time'}, please review and delete items
            you believe are duplicates{' '}
        </>
    ),
    STOP_ALL_UPLOADS_MESSAGE:
        'Are you sure that you want to stop all the uploads in progress?',
    STOP_UPLOADS_HEADER: 'Stop uploads?',
    YES_STOP_UPLOADS: 'Yes, stop uploads',
    ALBUMS: 'Albums',
    NEW: 'New',
    VIEW_ALL_ALBUMS: 'View all Albums',
    ALL_ALBUMS: 'All Albums',
    ENDS: 'Ends',
    ENTER_TWO_FACTOR_OTP: 'Enter the 6-digit code from your authenticator app.',
    CREATE_ACCOUNT: 'Create account',
    COPIED: 'Copied',
    CANVAS_BLOCKED_TITLE: 'Unable to generate thumbnail',
    CANVAS_BLOCKED_MESSAGE: () => (
        <>
            <p>
                It looks like your browser has disabled access to canvas, which
                is necessary to generate thumbnails for your photos
            </p>
            <p>
                Please enable access to your browser's canvas, or check out our
                desktop app
            </p>
        </>
    ),
    WATCH_FOLDERS: 'Watch folders',
    UPGRADE_NOW: 'Upgrade now',
    RENEW_NOW: 'Renew now',
    STORAGE: 'Storage',
    USED: 'used',
    YOU: 'You',
    FAMILY: 'Family',
    FREE: 'free',
    OF: 'of',
    WATCHED_FOLDERS: 'Watched folders',
    NO_FOLDERS_ADDED: 'No folders added yet!',
    FOLDERS_AUTOMATICALLY_MONITORED:
        'The folders you add here will monitored to automatically',
    UPLOAD_NEW_FILES_TO_ENTE: 'Upload new files to ente',
    REMOVE_DELETED_FILES_FROM_ENTE: 'Remove deleted files from ente',
    ADD_FOLDER: 'Add folder',
    STOP_WATCHING: 'Stop watching',
    STOP_WATCHING_FOLDER: 'Stop watching folder?',
    STOP_WATCHING_DIALOG_MESSAGE:
        'Your existing files will not be deleted, but ente will stop automatically updating the linked ente album on changes in this folder.',
    YES_STOP: 'Yes, stop',
    MONTH_SHORT: 'mo',
    YEAR: 'year',
    FAMILY_PLAN: 'Family plan',
    DOWNLOAD_LOGS: 'Download logs',
    DOWNLOAD_LOGS_MESSAGE: () => (
        <>
            <p>
                This will download debug logs, which you can email to us to help
                debug your issue.
            </p>
            <p>
                Please note that file names will be included to help track
                issues with specific files.
            </p>
        </>
    ),
    CHANGE_FOLDER: 'Change Folder',
    TWO_MONTHS_FREE: 'Get 2 months free on yearly plans',
    GB: 'GB',
    POPULAR: 'Popular',
    FREE_PLAN_OPTION_LABEL: 'Continue with free trial',
    FREE_PLAN_DESCRIPTION: '1 GB for 1 year',
    CURRENT_USAGE: (usage) => (
        <>
            Current usage is <strong>{usage}</strong>
        </>
    ),
    WEAK_DEVICE:
        "The web browser you're using is not powerful enough to encrypt your photos. Please try to log in to ente on your computer, or download the ente mobile/desktop app.",
    DRAG_AND_DROP_HINT: 'Or drag and drop into the ente window',
    ASK_FOR_FEEDBACK: (
        <>
            <p>We'll be sorry to see you go. Are you facing some issue?</p>
            <p>
                Please write to us at{' '}
                <Link href="mailto:feedback@ente.io">feedback@ente.io</Link>,
                maybe there is a way we can help.
            </p>
        </>
    ),
    SEND_FEEDBACK: 'Yes, send feedback',
    CONFIRM_ACCOUNT_DELETION_TITLE:
        'Are you sure you want to delete your account?',
    CONFIRM_ACCOUNT_DELETION_MESSAGE: (
        <>
            <p>
                Your uploaded data will be scheduled for deletion, and your
                account will be permanently deleted.
            </p>
            <p>This action is not reversible.</p>
        </>
    ),
    AUTHENTICATE: 'Authenticate',
    UPLOADED_TO_SINGLE_COLLECTION: 'Uploaded to single collection',
    UPLOADED_TO_SEPARATE_COLLECTIONS: 'Uploaded to separate collections',
    NEVERMIND: 'Nevermind',
    UPDATE_AVAILABLE: 'Update available',
    UPDATE_INSTALLABLE_MESSAGE:
        'A new version of ente is ready to be installed.',
    INSTALL_NOW: `Install now`,
    INSTALL_ON_NEXT_LAUNCH: 'Install on next launch',
    UPDATE_AVAILABLE_MESSAGE:
        'A new version of ente has been released, but it cannot be automatically downloaded and installed.',
    DOWNLOAD_AND_INSTALL: 'Download and install',
    IGNORE_THIS_VERSION: 'Ignore this version',
    TODAY: 'Today',
    YESTERDAY: 'Yesterday',
    AT: 'at',
    NAME_PLACEHOLDER: 'Name...',
    ROOT_LEVEL_FILE_WITH_FOLDER_NOT_ALLOWED:
        'Cannot create albums from file/folder mix',
    ROOT_LEVEL_FILE_WITH_FOLDER_NOT_ALLOWED_MESSAGE: () => (
        <>
            <p>You have dragged and dropped a mixture of files and folders.</p>
            <p>
                Please provide either only files, or only folders when selecting
                option to create separate albums
            </p>
        </>
    ),
    ADD_X_PHOTOS: (x: number) => `Add ${x} ${x > 1 ? 'photos' : 'photo'}`,
    CHOSE_THEME: 'Choose theme',
    YOURS: 'yours',
};

export default englishConstants;
