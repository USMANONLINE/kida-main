<template>
  <q-page class="q-pa-sm">
    <q-tabs
      v-model="requestTab"
      inline-label
      no-caps
      class="bg-white"
      align="left"
    >
      <q-tab name="http" icon="http" label="Untitled Request" />
      <q-btn flat icon="add" dense />
    </q-tabs>

    <div class="row q-gutter-xs q-my-xs">
      <div class="col-2">
        <q-select
          v-model="mockPayload.method"
          :options="httpMethods"
          outlined
          dense
        />
      </div>
      <div class="col-9">
        <q-input
          prefix="http://localhost"
          v-model="mockPayload.path"
          dense
          outlined
        />
      </div>
      <div class="col">
        <q-btn label="Deploy" color="primary" no-caps />
      </div>
    </div>

    <q-card bordered flat>
      <q-tabs
        v-model="requestConfigTab"
        dense
        no-caps
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="left"
        narrow-indicator
      >
        <q-tab name="docs" label="Docs" />
        <q-tab name="reqHeader" label="Request Header" />
        <q-tab name="respHeader" label="Response Header" />
        <q-tab name="pathVariable" label="Path Variable" />
        <q-tab name="queryParam" label="Query Param" />
        <q-tab name="reqBody" label="Request Body" />
        <q-tab name="respBody" label="Request Body" />
        <q-tab name="otherSetting" label="Other Settings" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="requestConfigTab" animated>
        <q-tab-panel name="docs">
          <q-editor v-model="mockPayload.docs" />
        </q-tab-panel>

        <q-tab-panel name="reqHeader">
          <KeyPairTable :data="requiredReqHeader" />
        </q-tab-panel>

        <q-tab-panel name="respHeader">
          <KeyPairTable :data="requiredRespHeader" />
        </q-tab-panel>

        <q-tab-panel name="pathVariable">
          <KeyPairTable :data="pathVariable" />
        </q-tab-panel>

        <q-tab-panel name="queryParam">
          <KeyPairTable :data="queryParameter" />
        </q-tab-panel>

        <q-tab-panel name="reqBody">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
        <q-tab-panel name="respBody">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
        <q-tab-panel name="otherSetting">
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>Latency</q-item-label>
                <q-item-label caption lines="2"
                  >Configure how long it takes before your response is
                  returned</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-input outlined dense suffix="ms" />
              </q-item-section>
            </q-item>

            <q-separator spaced inset />

            <q-item>
              <q-item-section>
                <q-item-label>Status Code</q-item-label>
                <q-item-label caption
                  >Response status code to be returned</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-select outlined />
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import KeyPairTable from "@/components/KeyPairTable.vue";
import { HttpMockReq, TableKeyPairData } from "@/types/Fields";
import { ref } from "vue";

const requestTab = ref("http");
const requestConfigTab = ref("reqHeader");
const httpMethods = ref([
  "POST",
  "PUT",
  "GET",
  "PATCH",
  "DELETE",
  "HEAD",
  "OPTIONS"
]);

const defaultTableKeyPairRow = {
  name: "",
  type: "string",
  description: ""
};

const requiredReqHeader = ref<Array<TableKeyPairData>>([
  Object.create(defaultTableKeyPairRow)
]);

const requiredRespHeader = ref<Array<TableKeyPairData>>([
  Object.create(defaultTableKeyPairRow)
]);

const queryParameter = ref<Array<TableKeyPairData>>([
  Object.create(defaultTableKeyPairRow)
]);

const pathVariable = ref<Array<TableKeyPairData>>([
  Object.create(defaultTableKeyPairRow)
]);

const defaultMockReq: HttpMockReq = {
  title: "Untitled Request",
  method: "GET",
  docs: "",
  path: "/api/",
  queryParam: {},
  pathVariable: {},
  reqBody: {},
  respBody: {},
  reqHeader: {},
  respHeader: {},
  setting: {}
};

const mockPayload = ref<HttpMockReq>(defaultMockReq);
</script>
