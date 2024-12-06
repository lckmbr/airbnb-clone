import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

type IParams = Promise<{ listingId?: string }>;

const ListingPage = async ({ params }: { params: IParams }) => {
  const parameters = await params;

  const listing = await getListingById(parameters);
  const reservations = await getReservations(parameters);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ListingPage;
