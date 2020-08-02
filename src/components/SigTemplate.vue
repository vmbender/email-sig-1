<template>
  <div id="signature-template">
    <div style="color:#75787B; font-size: 12px;">
      <p style="color: #002554; font-size: 18px; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;"><strong>{{ sigName }}</strong>, <span style="font-size: 14px;">{{ sigTitle }}</span></span></p>
      <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><strong style="font-family: Arial, Helvetica, sans-serif;">{{ sigDept }}</strong></p>
      <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">South Dakota Mines</span></p>
      <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">501 E. Saint Joseph St., Rapid City, SD 57701</span></p>
      <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">{{ sigPhone }} | <a :href="'mailto:'+ sigPhone" style="color: #385E9D;">{{ sigEmail }}</a></span></p>
      <p style="margin-top: 1.5em; margin-bottom: 1.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;"><a href="#" style="color: #385E9D;">Connect with South Dakota Mines Admissions</a></span></p>
      <p style="margin-top: 1.5em; line-height: 1;"><img src="@/assets/sig-logo.png" width="263" height="35" style="height: 35px; width: 263px;" alt="South Dakota Mines"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SigTemplate",
  props: {
    sigName: { type: String, required: true },
    sigTitle: { type: String, required: true },
    sigDept: { type: String, required: true },
    sigPhone: { type: String, required: true },
    sigEmail: { type: String, required: true }
  },
  data() {
    return{}
  },
  methods: { 
  }
}
</script>

<style lang="scss">

</style>