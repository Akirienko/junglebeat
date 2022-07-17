<template>
  <section class="price">
    <div class="container">
      <div class="price-select">
        <select v-model="nameGame">
          <option disabled value="" hidden>Выберите игру</option>
          <option v-for="info in dataGames" :key="info.index">
            {{ info.name }}
          </option>
        </select>

        <div class="" v-if="nameGame">
          <input
            placeholder="Выберите сервер"
            class="datalist"
            list="server"
            v-model="serverGame"
          />
          <datalist id="server">
            <option v-for="serverName in dataGame" :key="serverName.id">
              {{ serverName.title }}
            </option>
          </datalist>
        </div>

        <select required v-model="priceGame" v-if="serverGame.length > 5">
          <option disabled value="">Выберите способ оплати</option>
          <option value="binancePrice">Бинанс</option>
          <option value="paypalPrice">Пейпал</option>
          <option value="webmoneyPrice">Вебмани</option>
        </select>
      </div>
      <div class="main-price">
        <p v-if="priceGame">
          {{ currNamePrice }} - <span>{{ price[priceGame] }}$</span>
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
      currNamePrice: "",
    };
  },
  methods: {},
  async created() {
    await fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        this.dataGames = data;
      });
  },
  watch: {
    nameGame: function () {
      if (this.nameGame) {
        this.dataGame = this.dataGames.filter(
          (game) => game.name == this.nameGame
        )[0].servers;
        this.serverGame = "";
        this.priceGame = "";
      }
    },
    serverGame: function () {
      if (this.serverGame) {
        this.dataServer = this.dataGame.filter(
          (game) => game.title == this.serverGame
        );
        this.priceGame = "";
      }
    },
    priceGame: function () {
      this.price = this.dataServer[0];
      if (this.priceGame == "binancePrice") {
        this.currNamePrice = "Бинанс";
      }
      if (this.priceGame == "paypalPrice") {
        this.currNamePrice = "Пейпал";
      }
      if (this.priceGame == "webmoneyPrice") {
        this.currNamePrice = "Вебмани";
      }
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
    select:required:invalid {
      color: rgba(255, 255, 255, 0.5);
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: "";
    }
    select,
    .datalist {
      border: 1px solid rgba(255, 255, 255, 0.5);
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
      select,
      .datalist {
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
      select,
      .datalist {
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
      select,
      .datalist {
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
