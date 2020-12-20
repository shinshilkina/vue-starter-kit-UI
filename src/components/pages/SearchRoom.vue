<template>
  <div class="searchRoom">
    <Filters class="searchRoom__filter"/>
    <div class="searchRoom__body">
      <h1 class="searchRoom__body body__title">Номера, которые мы для вас подобрали</h1>
      <div class="searchRoom__body body__rooms">
        <RoomCartS class="searchRoom__body body__room" v-for="room in this.dataRooms" :key="room.number"
               :room-number="room.number" :count-feedbacks="room.countFeedbacks"
               :room-type="room.type" :count-stars="room.countStars"
               :room-cost="room.cost" :images="room.images"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from '../elements/Filters';
import RoomCartS from '../elements/RoomCartS';
import roomsData from '../../data/rooms.ru.json';

export default {
    name: 'SearchRoom.vue',
    components: {Filters, RoomCartS},
    data() {
        const dataRooms = roomsData.rooms;
        return { dataRooms };
    }
};
</script>
<style lang="scss">
@import "src/components/style";

.searchRoom {
  display: flex;
  &__body {
    width: 60vw;
    display: flex;
    flex-wrap: wrap;
    padding: 0.8vh 2.5vw;
    .body__rooms, .body__room, .body__title {
      padding: 0;
    }
    .body__room {
      margin: 1.1vh 0.45vw;
    }
    .body__title {
      margin: 2.5vh 0.5vw 0.8vh 0.5vw;
    }
  }
}
</style>
