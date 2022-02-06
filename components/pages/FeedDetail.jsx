import Image from 'next/image';
import Card from '../ui/Card';

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonNote
} from '@ionic/react';

import Store from '../../store';
import * as selectors from '../../store/selectors';

const FeedDetailCard = ({ author, authorAvatar, image, textDetail }) => (
  <Card className="">
    <div className="flex items-center space-x-4 m-3">
      <div className="w-10 h-10 relative">
        <Image layout='fill' src={authorAvatar} className="rounded-full" alt="" />
      </div>
      <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
    </div>

    <div className="h-40 w-full relative">
      <Image className="rounded-t-xl" objectFit="cover" src={image} alt="" layout='fill' />
    </div>
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{textDetail}</p>
    </div>
  </Card>
);

const FeedDetail = ({match}) =>{
  const { params: { feedId },} = match;
  const homeItems = Store.useState(selectors.getHomeItems);
  const feedDetails = Store.useState(selectors.getFeedDetails);

  const loadedFeedDetail = feedDetails[feedId-1];
  const loadedhomeItem = homeItems[feedId-1];
  console.log(homeItems)

  return(
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/feed" />
          </IonButtons>
          <IonTitle>{loadedhomeItem.title}</IonTitle>
          <IonNote class='pl-5' slot="">{loadedhomeItem.type}</IonNote>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{loadedhomeItem.title}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <FeedDetailCard {...loadedhomeItem} textDetail = {loadedFeedDetail.text}/>
        
      </IonContent>
    </IonPage>
  )
}

export default FeedDetail;