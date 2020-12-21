<template>
  <div class="main">
    <div class="colors">
      <div class="color" v-for="color in this.colors">
        <div class="color__block" v-bind:class=color.color></div>
        <div  class="color__title">
          <h2>{{ color.name }}</h2>
          <span>{{ color.description }}</span>
        </div>
      </div>
    </div>
    <div class="fonts">
      <div class="font" v-for="font in this.fonts">
      <span class="font__name" v-bind:class=font.name>{{ font.name }}</span>
      <h1 class="font__text" v-if="font.name === 'H1'">{{ font.text }}</h1>
      <h2 class="font__text" v-if="font.name === 'H2'">{{ font.text }}</h2>
      <h3 class="font__text" v-if="font.name === 'H3'">{{ font.text }}</h3>
      <span class="font__text" v-if="font.name === 'Body'">{{ font.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Colors_and_type",
  data () {
    return {
      colors: [
        { name: "Dark Shade 100%", description: "#1F2041", color: "darkShade100"},
        { name: "Dark Shade 75%", description: "#1F2041", color: "darkShade75"},
        { name: "Dark Shade 50%", description: "#1F2041", color: "darkShade50"},
        { name: "Dark Shade 25%", description: "#1F2041", color: "darkShade25"},
        { name: "Dark Shade 5%", description: "#1F2041", color: "darkShade5"},
        { name: "Purple", description: "#DC9CFF", color: "purple"},
        { name: "Green", description: "#6FCF97", color: "green"},
      ],
      fonts: [
        {name: "H1", text: "This one is the sub-section or widget title"},
        {name: "H2", text: "Next one is the item title inside widgets"},
        {name: "H3", text: "This is a label or CTA text"},
        {name: "Body", text: "This is the body text which is used for most of the design, like paragraphs, lists, etc."}
      ]
    }
  },
  methods: {
  }
}

</script>

<style lang="scss">
@import "../style";
.main {
  display: flex;
}
.colors {
  margin: 13.6vh 0 0 9.6vw;
}
.fonts {
  margin: 12vh 0 0 30vw;
}
.color {
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 2vh;

  &__block {
    width: 7.2vh;
    height: 7.2vh;
    border-radius: 6px;
  }

  &__title {
    margin-left: 2.7vw;
  }
}

.font {
  display: flex;
  margin-bottom: 2.5vh;
  &__name {
    text-align: right;
    width: 1.8vw;
    margin-right: 2vw;
  }
  &__text {
    width: 23vw;
  }
}

.darkShade100 {
  background-color: $darkShade100;
}
.darkShade75 {
  background-color: $darkShade75;
}
.darkShade50 {
  background-color: $darkShade50;
}
.darkShade25 {
  background-color: $darkShade25;
}
.darkShade5 {
  background-color: $darkShade5;
}
.purple {
  background-color: $purple;
}
.green {
  background-color: $green;
}
</style>
