<template>
  <div ref="map" style="width: 100%; height: 600px"></div>
</template>

<script>
export default {
  name: "GoogleMap",
  props: {
    zoom: {
      type: Number,
      default: 13,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      map: null,
      center: { lat: -23.55052, lng: -46.633308 },
      userLocation: null,
      locations: [],
    };
  },
  mounted() {
    this.initMap();
    this.requestCurrentLocation();
    this.getItemsBounds();
  },
  methods: {
    initMap() {
      // Inicializa o mapa com a posição padrão
      this.map = new google.maps.Map(this.$refs.map, {
        center: this.center,
        zoom: this.zoom,
      });
    },
    requestCurrentLocation() {
      // Verifica se o navegador suporta a API de Geolocalização
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            // Armazena a localização do usuário
            this.userLocation = userLocation;

            // Centraliza o mapa na localização do usuário
            this.map.setCenter(userLocation);

            // Adiciona um marcador na localização do usuário
            new google.maps.Marker({
              position: userLocation,
              map: this.map,
              title: "Você está aqui!",
              icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            });
          },
          (error) => {
            console.error("Erro ao obter localização:", error);
          },
          {
            enableHighAccuracy: true, // Garante o uso de GPS ou outras fontes de localização precisas
            timeout: 5000, // Timeout de 5 segundos, se a geolocalização não for obtida rapidamente
            maximumAge: 0, // Não usa informações antigas de cache
          }
        );
      } else {
        console.error("Geolocalização não é suportada pelo navegador.");
      }
    },
    getItemsBounds() {
      this.items.forEach((item) => {
        const marker = new google.maps.Marker({
          position: { lat: Number(item.latitude), lng: Number(item.longitude) },
          map: this.map,
          title: item.name,
        });

        // Cria uma janela de informações para exibir mais detalhes
        const infoWindow = new google.maps.InfoWindow({
          content: `<div><strong class="text-black">${item.name}</strong></div>
        <div><strong class="text-black">${item.address}</strong></div>
        <div><strong class="text-black">${item.neighborhood}</strong></div>
          <div><strong class="text-black">${item.zip_code ? item.zip_code : ""}</strong></div>`,
        });

        // Adiciona um ouvinte de evento para abrir a janela de informações ao clicar no marcador
        marker.addListener("click", () => {
          infoWindow.open(this.map, marker);
        });
      });
    },
  },
};
</script>
