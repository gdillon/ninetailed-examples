<template>
  <div v-if="isBlockArray(block)" v-for="b in block">
    <BlockRenderer :key="`block-${b.sys.id}`" :block="b" />
  </div>
  <div v-else>
    <component
      :is="blockComponent"
      :key="`${contentTypeId}-${id}`"
      :block="block"
    />
  </div>
</template>

<script setup lang="ts">
import * as Contentful from "contentful";

type Block = Contentful.Entry<unknown> & {
  parent?: Contentful.Entry<unknown>;
};

function isBlockArray(blockProp: Block | Block[]): blockProp is Block[] {
  return Array.isArray(blockProp);
}

const Banner = resolveComponent("Banner");
const Cta = resolveComponent("Cta");
const Feature = resolveComponent("Feature");
const Footer = resolveComponent("Footer");
const Form = resolveComponent("Form");
const Hero = resolveComponent("Hero");
const HubspotForm = resolveComponent("HubspotForm");
const Navigation = resolveComponent("Navigation");
const PricingPlan = resolveComponent("PricingPlan");
const PricingTable = resolveComponent("PricingTable");

const blockContentTypeMap = {
  banner: Banner,
  cta: Cta,
  feature: Feature,
  footer: Footer,
  form: Form,
  hero: Hero,
  hubspotForm: HubspotForm,
  navigation: Navigation,
  pricingPlan: PricingPlan,
  pricingTable: PricingTable,
};

const { block } = defineProps<{ block: Block | Block[] }>();

let contentTypeId: keyof typeof blockContentTypeMap;
let blockComponent: typeof blockContentTypeMap[keyof typeof blockContentTypeMap];
let id: string;

if (!isBlockArray(block)) {
  contentTypeId = block.sys.contentType.sys
    .id as keyof typeof blockContentTypeMap;
  blockComponent = blockContentTypeMap[contentTypeId];

  id = block.sys.id;
}
</script>
