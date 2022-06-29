<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <a href="/">
          <svg
            width="73"
            height="87"
            viewBox="0 0 73 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.892 47.466C26.42 47.31 26.894 47.028 27.314 46.62C27.734 46.224 28.04 45.732 28.232 45.144C28.388 44.688 28.49 44.16 28.538 43.56C28.586 42.948 28.61 42.012 28.61 40.752V32.76L26.882 32.526V31.626H32.174V32.526L30.536 32.76V40.05V40.896C30.536 41.844 30.524 42.606 30.5 43.182C30.476 43.758 30.422 44.25 30.338 44.658C30.122 45.618 29.648 46.41 28.916 47.034C28.184 47.658 27.338 48.054 26.378 48.222L25.892 47.466Z"
              fill="white"
              fill-opacity="0.8"
            />
            <path
              d="M35.322 45.742L33.846 45.526V44.626H36.276C36.684 44.626 37.2 44.602 37.824 44.554C38.4 44.506 38.826 44.482 39.102 44.482C40.758 44.482 41.94 44.74 42.648 45.256C43.368 45.772 43.728 46.528 43.728 47.524C43.728 48.376 43.482 49.108 42.99 49.72C42.498 50.332 41.826 50.716 40.974 50.872C42.126 50.848 43.032 51.118 43.692 51.682C44.352 52.246 44.682 53.014 44.682 53.986C44.682 55.198 44.25 56.188 43.386 56.956C42.534 57.724 41.118 58.108 39.138 58.108C38.706 58.108 38.292 58.09 37.896 58.054C36.96 58.018 36.402 58 36.222 58H33.828V57.118L35.322 56.938V45.742ZM37.23 50.53C37.398 50.542 37.74 50.548 38.256 50.548H39.246C40.086 50.548 40.722 50.314 41.154 49.846C41.586 49.378 41.802 48.712 41.802 47.848C41.802 47.008 41.586 46.396 41.154 46.012C40.722 45.616 39.984 45.418 38.94 45.418C38.508 45.418 38.064 45.442 37.608 45.49L37.23 45.526V50.53ZM37.23 56.992C37.506 57.088 38.13 57.136 39.102 57.136C40.314 57.136 41.19 56.89 41.73 56.398C42.282 55.894 42.558 55.174 42.558 54.238C42.558 53.314 42.318 52.642 41.838 52.222C41.37 51.802 40.608 51.592 39.552 51.592C38.328 51.592 37.554 51.604 37.23 51.628V56.992Z"
              fill="white"
              fill-opacity="0.8"
            />
            <path
              d="M71.5 52.5L58 35.5L50.5 32.5L49.5 25L33.5 5.5L1 44L36 86L71.5 44L36 1"
              stroke="#D0D3D8"
            />
          </svg>
        </a>
      </div>
      <div class="header-contacts">
        <div class="socials">
          <a href="https://discord.gg/ujnt9Mdu">
            <img src="@/assets/img/social/discordSub.png" alt="discord icon" />
          </a>
          <a href="http://t.me/JungleBeat" target="_blank">
            <img
              src="@/assets/img/social/telegramSub.png"
              alt="telegram icon"
            />
          </a>
          <a href="https://join.skype.com/invite/hU5jVUKFKygZ">
            <img src="@/assets/img/social/skypeSub.png" alt="skype icon" />
          </a>
        </div>
        <div class="log-in">
          <a href="/">
            Log in
            <svg
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 16.6896C4 14.3054 9.33333 12.9941 12 12.9941C14.6667 12.9941 20 14.3054 20 16.6896V17.8817H4V16.6896ZM16 7.15269C16 8.1012 15.5786 9.01086 14.8284 9.68155C14.0783 10.3522 13.0609 10.729 12 10.729C10.9391 10.729 9.92172 10.3522 9.17157 9.68155C8.42143 9.01086 8 8.1012 8 7.15269C8 6.20419 8.42143 5.29453 9.17157 4.62383C9.92172 3.95314 10.9391 3.57635 12 3.57635C13.0609 3.57635 14.0783 3.95314 14.8284 4.62383C15.5786 5.29453 16 6.20419 16 7.15269ZM0 2.38423V19.0738C0 19.7062 0.280951 20.3126 0.781048 20.7598C1.28115 21.2069 1.95942 21.4581 2.66667 21.4581H21.3333C22.0406 21.4581 22.7189 21.2069 23.219 20.7598C23.719 20.3126 24 19.7062 24 19.0738V2.38423C24 1.75189 23.719 1.14545 23.219 0.698325C22.7189 0.251195 22.0406 0 21.3333 0H2.66667C1.95942 0 1.28115 0.251195 0.781048 0.698325C0.280951 1.14545 0 1.75189 0 2.38423Z"
                fill="#0A0123"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBlock",
};
</script>

<style lang="scss" scoped>
.header {
  height: 6rem;
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 0;
  background: transparent;
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  & > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    a {
      svg {
        width: 4rem;
        height: 6rem;
      }
    }
  }
  .header-contacts {
    display: flex;
    align-items: center;
    .socials {
      display: flex;
      margin-right: 1rem;
      a {
        display: block;
        margin-right: 1rem;
        width: 3rem;
        height: 3rem;
        transition: 0.3s;
        img {
          object-fit: contain;
        }
        &:hover {
          opacity: 0.7;
        }
      }
    }
    .log-in {
      a {
        background: #2cd6e1;
        color: #000;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.5rem;
        transition: 0.3s;
        svg {
          margin-left: 0.5rem;
          width: 2rem;
        }
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}

@media (min-width: 720px) {
  .header {
    height: 9rem;
    padding: 0.5rem 0;
    .logo {
      a {
        svg {
          width: 8rem;
          height: 8rem;
        }
      }
    }
    .header-contacts {
      .socials {
        margin-right: 2rem;
      }
      .log-in {
        a {
          height: 4rem;
          padding: 0 2rem;
          font-size: 1.8rem;
          line-height: 1.5rem;
          svg {
            margin-left: 1rem;
            width: 3rem;
          }
        }
      }
    }
  }
}

@media (min-width: 1620px) {
  .header {
    .header-contacts {
      .socials {
        margin-right: 3rem;
        a {
          margin-right: 2rem;
          width: 4rem;
          height: 4rem;
        }
      }
      .log-in {
        a {
          height: 5rem;
          padding: 0 3rem;
        }
      }
    }
  }
}
</style>
