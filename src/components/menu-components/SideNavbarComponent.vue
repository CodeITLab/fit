<script lang="ts" setup>
import { useModalStore } from "@/store/modalStore";
import ModalManager from "@/controllers/ModalManagerController";
</script>

<template>
  <nav>
    <div class="container-fluid">
      <div class="side-menu">
        <ul class="side-menu-items">
          <li class="menu-item logo">
            <img
              width="40"
              src="../../assets/img/logos/fitness-logo-and-gym-icon-design-illustrationicon-free-vector.png"
              alt=""
            />
          </li>
          <li class="menu-item home">
            <img width="25" src="../../assets/img/logos/training.png" alt="" />
          </li>
          <li class="menu-item analytics">
            <img width="25" src="../../assets/img/logos/analitics.png" alt="" />
          </li>
          <li class="menu-item logout">
            <button
              @click="
                ModalManager().UpdateCurrentModalValue('logoutModal', true)
              "
            >
              <img width="25" src="../../assets/img/logos/log-out.png" alt="" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
@import "/src/assets/css/components/menu-components/side-bar-nav.css";
</style>
