import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Page } from '../components/Page';
import { IonButton, IonFab, IonFabButton, IonIcon, IonList, IonModal } from '@ionic/react';
import { addOutline,closeOutline } from 'ionicons/icons'
import { useState } from 'react';

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const [list, setList] = useState<{
    title: string;
    date: string;
    description: string;
  }[]>([
    {
      title: 'Wash Dishes',
      date: '',
      description: ''
    }
  ])

  function handleClick(e:any) {
    e.preventDefault()
    setOpenModal(true)
  }
  return (
    <Page title="Todo List" >
      <IonModal isOpen={openModal}>
    <IonButton fill='clear' expand='block' >
      <IonIcon icon={closeOutline} />
    </IonButton>
      </IonModal>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={handleClick}>
          <IonIcon style={{ fontSize: '45px' }} icon={addOutline} />
        </IonFabButton>
      </IonFab>
    </Page>
  );
};

export default Home;

