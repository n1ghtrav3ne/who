<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import * as PhosphorIcons from "@phosphor-icons/vue";

export default defineComponent({
  name: "IconComponent",
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "",
    },
    hover: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 24,
    },
    hasHover: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    weight: {
      type: String,
      default: "regular",
    },
  },
  setup(props) {
    const isHovering = ref(false);

    const iconComponent = computed(() => {
      // Build the full icon name with "Ph" prefix
      const iconName = "Ph" + props.icon.charAt(0).toUpperCase() + props.icon.slice(1);
      const component = (PhosphorIcons as any)[iconName];
      if (!component) {
        console.warn(`Icon "${iconName}" not found in @phosphor-icons/vue`);
      }
      return component || "span";
    });

    const iconColor = computed(() => {
      if (props.active) return props.hover;
      if (props.hasHover && isHovering.value) return props.hover;
      return props.color;
    });

    const colorClass = computed(() => {
      if (props.active) {
        return `fill-[${props.hover}]`;
      } else if (props.hasHover) {
        return `fill-[${props.color}] group-hover:fill-[${props.hover}]`;
      } else {
        return `fill-[${props.color}]`;
      }
    });

    return {
      iconComponent,
      iconColor,
      isHovering,
      colorClass,
    };
  },
});
</script>


<template>
  <component
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
      :size="size"
      :weight="weight"
      :is="iconComponent"
      :style="{ fill: iconColor }"
      :class="[
      hasHover ? 'cursor-pointer' : '',
      'transition-all duration-200 ease-in-out select-none',
      colorClass
    ]"
  />
</template>