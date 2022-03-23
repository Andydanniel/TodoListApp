import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { FC } from 'react';

export const Page: FC<{ title: string; }> = ({ children, title }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {children}
      </IonContent>
    </IonPage>
  );
};
