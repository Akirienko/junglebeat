<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <a href="/">
          <svg
            viewBox="0 0 73 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.3884 87L50.7475 90.1156L55.9215 90.7739L64.8481 100.31"
              stroke="white"
              stroke-opacity="0.8"
            />
            <path
              d="M72 64L57.5 46.5L50.5 44L49.5 36.5L33.5 17L1 55.5L36 97.5L72 55.5L36 12.5V7L30 1"
              stroke="white"
              stroke-opacity="0.8"
            />
            <path
              d="M26.892 57.466C27.42 57.31 27.894 57.028 28.314 56.62C28.734 56.224 29.04 55.732 29.232 55.144C29.388 54.688 29.49 54.16 29.538 53.56C29.586 52.948 29.61 52.012 29.61 50.752V42.76L27.882 42.526V41.626H33.174V42.526L31.536 42.76V50.05V50.896C31.536 51.844 31.524 52.606 31.5 53.182C31.476 53.758 31.422 54.25 31.338 54.658C31.122 55.618 30.648 56.41 29.916 57.034C29.184 57.658 28.338 58.054 27.378 58.222L26.892 57.466Z"
              fill="white"
              fill-opacity="0.8"
            />
            <path
              d="M36.322 55.742L34.846 55.526V54.626H37.276C37.684 54.626 38.2 54.602 38.824 54.554C39.4 54.506 39.826 54.482 40.102 54.482C41.758 54.482 42.94 54.74 43.648 55.256C44.368 55.772 44.728 56.528 44.728 57.524C44.728 58.376 44.482 59.108 43.99 59.72C43.498 60.332 42.826 60.716 41.974 60.872C43.126 60.848 44.032 61.118 44.692 61.682C45.352 62.246 45.682 63.014 45.682 63.986C45.682 65.198 45.25 66.188 44.386 66.956C43.534 67.724 42.118 68.108 40.138 68.108C39.706 68.108 39.292 68.09 38.896 68.054C37.96 68.018 37.402 68 37.222 68H34.828V67.118L36.322 66.938V55.742ZM38.23 60.53C38.398 60.542 38.74 60.548 39.256 60.548H40.246C41.086 60.548 41.722 60.314 42.154 59.846C42.586 59.378 42.802 58.712 42.802 57.848C42.802 57.008 42.586 56.396 42.154 56.012C41.722 55.616 40.984 55.418 39.94 55.418C39.508 55.418 39.064 55.442 38.608 55.49L38.23 55.526V60.53ZM38.23 66.992C38.506 67.088 39.13 67.136 40.102 67.136C41.314 67.136 42.19 66.89 42.73 66.398C43.282 65.894 43.558 65.174 43.558 64.238C43.558 63.314 43.318 62.642 42.838 62.222C42.37 61.802 41.608 61.592 40.552 61.592C39.328 61.592 38.554 61.604 38.23 61.628V66.992Z"
              fill="white"
              fill-opacity="0.8"
            />
            <rect
              x="32.8058"
              y="2.19629"
              width="3.30846"
              height="2.27624"
              transform="rotate(45.0101 32.8058 2.19629)"
              fill="#C4C4C4"
            />
            <rect
              x="58.4839"
              y="92"
              width="4"
              height="2"
              transform="rotate(47.8932 58.4839 92)"
              fill="#C4C4C4"
            />
          </svg>
        </a>
      </div>
      <div class="header-contacts">
        <div class="socials">
          <a href="">
            <img src="@/assets/img/social/discordSub.png" alt="discord icon" />
          </a>
          <a href="http://t.me/AntonyKyriienko" target="_blank">
            <img
              src="@/assets/img/social/telegramSub.png"
              alt="telegram icon"
            />
          </a>
          <a href="">
            <img src="@/assets/img/social/skypeSub.png" alt="skype icon" />
          </a>
        </div>
        <div class="log-in">
          <a href="#">
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
    height: 12rem;
    .logo {
      a {
        svg {
          width: 8rem;
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
    height: 15rem;
    .logo {
      a {
        svg {
          width: 11rem;
        }
      }
    }
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
