<template>
  <section class="price">
    <div class="container">
      <div class="price-select">
        <select v-model="nameGame">
          <option disabled value="">Выберите игру</option>
          <option v-for="info in dataGames" :key="info.index">
            {{ info.name }}
          </option>
        </select>

        <select v-if="dataGame" v-model="serverGame">
          <option disabled value="">Выберите сервер</option>
          <option v-for="serverName in dataGame" :key="serverName.id">
            {{ serverName.title }}
          </option>
        </select>

        <select v-if="dataServer" v-model="priceGame">
          <option disabled value="">Выберите способ оплати</option>
          <option>binancePrice</option>
          <option>paypalPrice</option>
          <option>webmoneyPrice</option>
        </select>
      </div>
      <div class="main-price">
        <p v-if="priceGame">
          {{ priceGame }} - <span>{{ price[priceGame] }}$</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
const baseURL = "https://jungleprice.com.ua/api/statistics";

export default {
  data: () => {
    return {
      dataGames: null,
      dataGame: "",
      dataServer: "",

      nameGame: "",
      serverGame: "",

      price: "",
      priceGame: "",
    };
  },
  methods: {},
  async created() {
    await fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        this.dataGames = data;
        console.log(this.dataGames);
      });
  },
  watch: {
    nameGame: function () {
      if (this.nameGame) {
        this.dataGame = this.dataGames.filter(
          (game) => game.name == this.nameGame
        )[0].servers;
        // this.dataGame = this.dataGames[this.nameGame];
        console.log("this.dataGame", this.dataGame);
        this.serverGame = "";
        this.priceGame = "";
      }
    },
    serverGame: function () {
      if (this.serverGame) {
        this.dataServer = this.dataGame.filter(
          (game) => game.title == this.serverGame
        );
        // console.log("this.dataServer", this.dataServer);
        this.priceGame = "";
      }
    },
    priceGame: function (val) {
      console.log(val);
      this.price = this.dataServer[0];
      console.log("this.price", this.price);
    },
  },
};
</script>

<style lang="scss" scoped>
.price {
  margin: 15rem 0;
  .price-select {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    select {
      background: transparent;
      width: 30rem;
      height: 5rem;
      color: #fff;
      font-size: 1.4rem;
      padding: 0 1rem;
      margin-bottom: 2rem;
      option {
        color: black;
      }
    }
  }
  .main-price {
    text-align: center;
    margin-top: 5rem;
    p {
      font-size: 2rem;
    }
    span {
      font-weight: 700;
    }
  }
}
@media (min-width: 720px) {
  .price {
    margin: 20rem 0;
    .price-select {
      select {
        width: 40rem;
        margin-bottom: 3rem;
      }
    }
    .main-price {
      p {
        font-size: 2.2rem;
      }
      span {
        font-weight: 700;
      }
    }
  }
}

@media (min-width: 1020px) {
  .price {
    margin: 20rem 0;
    .price-select {
      select {
        width: 28rem;
        margin: 0 2rem 0 0;
        &:last-child {
          margin: 0;
        }
      }
    }
    .main-price {
      p {
        font-size: 2.2rem;
      }
    }
  }
}

@media (min-width: 1360px) {
  .price {
    margin: 20rem 0;
    .price-select {
      select {
        width: 33rem;
        margin: 0 5rem 0 0;
        &:last-child {
          margin: 0;
        }
      }
    }
    .main-price {
      p {
        font-size: 2.6rem;
      }
    }
  }
}
</style>
