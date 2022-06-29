<template>
  <footer class="footer">
    <svg viewBox="0 0 1439 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1445.5 1H603.5L509.5 51H0"
        stroke="white"
        stroke-opacity="0.8"
      />
      <rect x="221.5" y="42.5" width="86" height="17" fill="#C4C4C4" />
    </svg>

    <div class="footer-wrap container">
      <div class="footer-wrap__pay">
        <div class="img">
          <img src="@/assets/img/pay.png" alt="pay" />
        </div>
        <div class="img">
          <img src="@/assets/img/payPal.png" alt="pay" />
        </div>
        <div class="img">
          <img src="@/assets/img/crypt.png" alt="pay" />
        </div>
        <div class="img">
          <img src="@/assets/img/skrill.png" alt="pay" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBlock",
};
</script>

<style lang="scss" scoped>
.footer {
  & > svg {
    position: absolute;
    width: 100%;
    top: -1rem;
    left: 0;
  }
  &-wrap {
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &__pay {
      display: flex;
      align-items: center;
      .img {
        width: 3rem;
        height: 3rem;
        margin-right: 2rem;
        img {
          object-fit: contain;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
@media (min-width: 720px) {
  .footer {
    &-wrap {
      height: 15rem;
      &__pay {
        .img {
          width: 5rem;
          height: 5rem;
          margin-right: 3rem;
        }
      }
    }
  }
}

@media (min-width: 1020px) {
  .footer {
    &-wrap {
      height: 20rem;
      &__pay {
        .img {
          width: 5rem;
          height: 5rem;
        }
      }
    }
  }
}

@media (min-width: 1420px) {
  .footer {
    &-wrap {
      height: 25rem;
      &__pay {
        .img {
          width: 7rem;
          height: 7rem;
        }
      }
    }
  }
}
</style>
