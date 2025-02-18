import { Stack } from '@mui/material';
import { AppContext } from 'pages/_app';
import React, { useContext } from 'react';
import { Subscription } from 'types/billing';
import { SetLoading } from 'types/gallery';
import {
    activateSubscription,
    cancelSubscription,
    updatePaymentMethod,
    manageFamilyMethod,
    hasStripeSubscription,
    isSubscriptionCancelled,
} from 'utils/billing';
import constants from 'utils/strings/constants';
import ManageSubscriptionButton from './button';
interface Iprops {
    subscription: Subscription;
    closeModal: () => void;
    setLoading: SetLoading;
}

export function ManageSubscription({
    subscription,
    closeModal,
    setLoading,
}: Iprops) {
    const appContext = useContext(AppContext);
    const openFamilyPortal = () =>
        manageFamilyMethod(appContext.setDialogMessage, setLoading);

    return (
        <Stack spacing={1}>
            {hasStripeSubscription(subscription) && (
                <StripeSubscriptionOptions
                    subscription={subscription}
                    closeModal={closeModal}
                    setLoading={setLoading}
                />
            )}
            <ManageSubscriptionButton
                color="secondary"
                onClick={openFamilyPortal}>
                {constants.MANAGE_FAMILY_PORTAL}
            </ManageSubscriptionButton>
        </Stack>
    );
}

function StripeSubscriptionOptions({
    subscription,
    setLoading,
    closeModal,
}: Iprops) {
    const appContext = useContext(AppContext);

    const confirmReactivation = () =>
        appContext.setDialogMessage({
            title: constants.REACTIVATE_SUBSCRIPTION,
            content: constants.REACTIVATE_SUBSCRIPTION_MESSAGE(
                subscription.expiryTime
            ),
            proceed: {
                text: constants.REACTIVATE_SUBSCRIPTION,
                action: activateSubscription.bind(
                    null,
                    appContext.setDialogMessage,
                    closeModal,
                    setLoading
                ),
                variant: 'accent',
            },
            close: {
                text: constants.CANCEL,
            },
        });
    const confirmCancel = () =>
        appContext.setDialogMessage({
            title: constants.CANCEL_SUBSCRIPTION,
            content: constants.CANCEL_SUBSCRIPTION_MESSAGE(),
            proceed: {
                text: constants.CANCEL_SUBSCRIPTION,
                action: cancelSubscription.bind(
                    null,
                    appContext.setDialogMessage,
                    closeModal,
                    setLoading
                ),
                variant: 'danger',
            },
            close: {
                text: constants.NEVERMIND,
            },
        });
    const openManagementPortal = updatePaymentMethod.bind(
        null,
        appContext.setDialogMessage,
        setLoading
    );
    return (
        <>
            {isSubscriptionCancelled(subscription) ? (
                <ManageSubscriptionButton
                    color="secondary"
                    onClick={confirmReactivation}>
                    {constants.REACTIVATE_SUBSCRIPTION}
                </ManageSubscriptionButton>
            ) : (
                <ManageSubscriptionButton
                    color="secondary"
                    onClick={confirmCancel}>
                    {constants.CANCEL_SUBSCRIPTION}
                </ManageSubscriptionButton>
            )}
            <ManageSubscriptionButton
                color="secondary"
                onClick={openManagementPortal}>
                {constants.MANAGEMENT_PORTAL}
            </ManageSubscriptionButton>
        </>
    );
}
