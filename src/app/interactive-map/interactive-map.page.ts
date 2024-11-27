import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.page.html',
  styleUrls: ['./interactive-map.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton]
})
export class InteractiveMapPage implements AfterViewInit, OnDestroy {
  private map!: L.Map;
  private currentLocationMarker!: L.Marker;
  private resizeListener!: () => void;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
    this.locateUser();
    this.setupCenterButton();

    // Adiciona o listener para redimensionamento da janela
    this.resizeListener = () => {
      this.map.invalidateSize();
    };
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy(): void {
    // Remove o listener ao destruir o componente
    window.removeEventListener('resize', this.resizeListener);
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      tileSize: 256
    }).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

  private locateUser(): void {
    this.map.locate({ setView: true, maxZoom: 16 });

    this.map.on('locationfound', (e: L.LocationEvent) => {
      const radius = e.accuracy / 2;

      this.currentLocationMarker = L.marker(e.latlng).addTo(this.map)
        .bindPopup(`Você está dentro de ${radius} metros deste ponto`).openPopup();

      L.circle(e.latlng, radius).addTo(this.map);
    });

    this.map.on('locationerror', (e: L.ErrorEvent) => {
      alert(e.message);
    });
  }

  private setupCenterButton(): void {
    const button = document.getElementById('center-map-button');
    if (button) {
      button.addEventListener('click', () => {
        if (this.currentLocationMarker) {
          this.map.setView(this.currentLocationMarker.getLatLng(), this.map.getZoom());
        }
      });
    }
  }
}