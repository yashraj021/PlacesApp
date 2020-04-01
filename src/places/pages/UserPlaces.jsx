import React, {useEffect, useState, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import {useHttpClient} from '../../shared/hooks/http-hook';
import PlaceList from '../components/PlaceList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const UserPlaces = () => {

  const userId = useParams().userId;
  const {isLoading, error, sendRequest, clearError} = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState();

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/user/${userId}`
        );
        setLoadedPlaces(responseData.places);
      } catch(err) {}
    }

    fetchRequest();
  }, [sendRequest, userId])

  const placeDeleteHandler = (deletedPlaceId) => {
    setLoadedPlaces(prevPlaces => 
      prevPlaces.filter(place => place.id !== deletedPlaceId )
    )
  };

  return(
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}
      {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace={placeDeleteHandler}/>}
    </Fragment>
  )
}

export default UserPlaces;