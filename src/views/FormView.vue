<template>
  <section class="contacts-page">
    <svg viewBox="0 0 822 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H362L417 24H822" stroke="white" stroke-opacity="0.8" />
      <rect x="458" y="19" width="53" height="9" fill="#C4C4C4" />
    </svg>
    <div class="warrior-img">
      <img :src="formData.warrior_img.url" alt="warrior" ref="" />
    </div>

    <div class="container">
      <h1>{{ $prismic.asText(formData.title_page) }}</h1>

      <div class="contacts-wrap">
        <img src="@/assets/img/bgForm.png" alt="bg-about" class="bg-form" />

        <div class="contacts-wrap__info">
          <div class="social">
            <h5 class="social-title">
              {{ $prismic.asText(formData.title_social) }}
            </h5>
            <div class="social-list">
              <a href="https://discord.gg/ujnt9Mdu">
                <img src="@/assets/img/social/discord.png" alt="discord icon" />
              </a>
              <a href="http://t.me/JungleBeat" target="_blank">
                <img
                  src="@/assets/img/social/telegram.png"
                  alt="telegram icon"
                />
              </a>
              <a href="https://join.skype.com/invite/hU5jVUKFKygZ">
                <img src="@/assets/img/social/skype.png" alt="skype icon" />
              </a>
            </div>
          </div>
          <div class="or">
            <p>Или</p>
            <svg
              viewBox="0 0 213 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5H82.6613L100.308 1H213"
                stroke="white"
                stroke-opacity="0.8"
                stroke-width="0.5"
              />
            </svg>
          </div>
          <form ref="formSend" @submit.prevent="sendEmail">
            <input
              type="text"
              name="user_name"
              placeholder="Имя"
              class="input-form"
            />
            <input
              type="email"
              name="user_email"
              placeholder="E-mail"
              class="input-form"
            />
            <textarea
              name="message"
              placeholder="Доп. информация..."
              class="input-form"
            ></textarea>
            <input class="btn-send" type="submit" value="Отправить заявку" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs, { sendForm } from "@emailjs/browser";

export default {
  data: () => {
    return {
      formData: [],
    };
  },
  methods: {
    sendEmail() {
      emailjs.sendForm(
        "service_ledsz8o",
        "template_mmovlqu",
        this.$refs.formSend,
        "y9QcRFHeWaQD2G7xN"
      );
      try {
        sendForm();
        console.log("SUCCESS!");
      } catch (err) {
        console.log("FAILED...", err);
      } finally {
        this.$refs.formSend.reset();
      }
      // .then(
      //   (result) => {
      //     console.log("SUCCESS!", result.text);
      //     alert("Форма отправленна");
      //     result.finally(() => {
      //       this.$refs.form.reset();

      //       // завершён (успешно или с ошибкой)
      //     });
      //   },
      //   (error) => {
      //     console.log("FAILED...", error.text);
      //   }
      // );
    },
    async getFormPage() {
      await this.$prismic.client
        .getByID("YoPToxEAACIAB5pc")
        .then((data) => (this.formData = data.data))
        .catch((err) => console.error(err));
      console.log(this.formData);
    },
  },
  created() {
    this.getFormPage();
  },
};
</script>

<style lang="scss" scoped>
.contacts-page {
  margin: 7rem 0;
  .warrior-img {
    position: absolute;
    right: 0;
    z-index: 0;
    width: 30rem;
    bottom: 10rem;
    img {
      opacity: 0.8;
    }
  }
  .container > h1 {
    font-weight: 600;
    font-size: 2.6rem;
    line-height: 3.2rem;
    background: linear-gradient(
      180deg,
      #a98fe1 0%,
      rgba(253, 253, 253, 0.85) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 4rem;
  }
  .contacts-wrap {
    padding: 2.5rem 3rem;
    & > img {
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      width: 106%;
      opacity: 0.8;
    }
    &__info {
      max-width: 40rem;
      .or {
        display: flex;
        margin-bottom: 3rem;
        p {
          font-weight: 600;
          margin-right: 1rem;
        }
      }
      .social {
        &-title {
          font-weight: 600;
          font-size: 2rem;
          line-height: 2.4rem;
          opacity: 0.8;
        }
        &-list {
          display: flex;
          margin: 1.5rem 0;
          a {
            display: block;
            width: 6rem;
            margin-right: 2rem;
            transition: 0.3s;
            &:hover {
              opacity: 0.7;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
      form {
        input,
        textarea {
          border: 1px solid rgba(255, 255, 255, 0.8);
          height: 5rem;
          background: transparent;
          margin-bottom: 1.5rem;
          width: 100%;
          padding-left: 1.5rem;
          color: #fff;
        }
        textarea {
          height: 10rem;
          padding-top: 1.5rem;
        }
        .btn-send {
          height: 6rem;
          cursor: pointer;
          background: transparent;
          border: none;
          background: #2cd6e1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #293045;
          font-weight: 700;
          font-size: 1.6rem;
          line-height: 2rem;
          transition: 0.3s;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}

@media (min-width: 720px) {
  .contacts-page {
    margin-top: 12rem;
    .warrior-img {
      width: 50rem;
      bottom: -1rem;
    }
    .contacts-wrap {
      padding: 2.5rem 6rem;
      & > img {
        width: 100%;
      }
    }
  }
}

@media (min-width: 1020px) {
  .contacts-page {
    padding: 0;
    margin: 15rem 0;
    .warrior-img {
      width: 75rem;
    }
    .container > h1 {
      font-size: 6rem;
      line-height: 7.3rem;
      margin-bottom: 7rem;
    }
    .contacts-wrap {
      padding: 5rem 10rem;
      .or {
        margin-bottom: 5rem;
      }
      & > img {
        max-width: 110rem;
        max-height: 81rem;
      }
      &__info {
        .social {
          &-title {
            font-size: 3rem;
            line-height: 3.7rem;
            margin-bottom: 3rem;
          }
          &-list {
            margin-bottom: 5rem;
          }
        }
        form {
          input,
          textarea {
            height: 6.5rem;
            font-size: 1.6rem;
            margin-bottom: 2rem;
            padding-left: 2rem;
          }
          textarea {
            height: 15rem;
            padding-top: 2rem;
          }
          .btn-send {
            margin-top: 3rem;
            height: 6.5rem;
            font-size: 1.8rem;
          }
        }
      }
    }
  }
}

@media (min-width: 1360px) {
  .contacts-page {
    .warrior-img {
      width: 80rem;
    }
    .container > h1 {
      font-size: 6rem;
      line-height: 7.3rem;
      margin-bottom: 7rem;
    }
    .contacts-wrap {
      padding: 5rem 10rem;
    }
  }
}
</style>
