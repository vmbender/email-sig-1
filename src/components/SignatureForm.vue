<template>
  <div id="formarea">
    <b-row>
      <b-col md="6">
        <b-form-group id="namegroup" label="Name" label-for="namefield">
          <b-form-input id="namefield" v-model="name" type="text" placeholder="Your name"></b-form-input>
        </b-form-group>
        <b-form-group id="titlegroup" label="Title" label-for="titlefield">
          <b-form-input 
            required id="titlefield" 
            v-model="title" type="text" 
            placeholder="Your title" 
            ></b-form-input>
        </b-form-group>
        <b-form-group id="deptgroup" label="Department" label-for="deptfield">
          <b-form-select required id="deptfield" v-model="dept" type="text" :options="departments"></b-form-select>
        </b-form-group>
        <b-form-group id="phonegroup" label="Office Phone" label-for="phonefield">
          <b-form-input id="phonefield" v-model="phone" maxlength="12" type="tel" :placeholder="pphone" :formatter="phoneformat"></b-form-input>
        </b-form-group>
        <b-form-group id="emailgroup" label="Email Address" label-for="emailfield">
          <b-form-input id="emailfield" v-model="email" type="email" placeholder="Your email address" :formatter="emailformat"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <h6>Signature Preview</h6>
        <b-card id="preview">
          <!-- <SigTemplate :sig-name="name" :sig-title="title" :sig-dept="dept" :sig-phone="phone" :sig-email="email"/> -->
          <div id="signature-template">
            <div style="color:#75787B; font-size: 12px;">
              <p style="color: #002554; font-size: 18px; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;"><strong>{{ dname }}</strong>, <span style="font-size: 14px;">{{ dtitle }}</span></span></p>
              <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><strong style="font-family: Arial, Helvetica, sans-serif;">{{ ddept }}</strong></p>
              <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">South Dakota Mines</span></p>
              <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">501 E. Saint Joseph St., Rapid City, SD 57701</span></p>
              <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">{{ dphone }} | <a :href="'mailto:'+ email" style="color: #385E9D;">{{ demail }}</a></span></p>
              <p style="margin-top: 1.5em; line-height: 1;"><a href="https://www.sdsmt.edu/"><img src="@/assets/sig-logo.png" width="263" height="35" style="height: 35px; width: 263px;" alt="South Dakota Mines"></a></p>
              <p>
                <a href="https://www.facebook.com/SouthDakotaMines/"><img src="@/assets/social/Facebook_Gold.png" width="24" height="24" style="margin-right: 2px" alt="South Dakota Mines on Facebook"></a>
                <a href="https://www.instagram.com/southdakotamines/"><img src="@/assets/social/Instagram_Gold.png"  width="24" height="24"  style="margin-right: 2px" alt="South Dakota Mines on Instagram"></a>
                <a href="https://twitter.com/sdsmt"><img src="@/assets/social/Twitter_Gold.png"  width="24" height="24" style="margin-right: 2px"  alt="South Dakota Mines on Twitter"></a>
                <a href="https://www.snapchat.com/add/sdsmt"><img src="@/assets/social/Snapchat_Gold.png"  width="24" height="24" style="margin-right: 2px"  alt="South Dakota Mines on Snapchat"></a>
              </p>
            </div>
          </div>
        </b-card>
        <b-button block size="sm" variant="secondary" @click="onClick">Copy Signature</b-button>
      </b-col>
    </b-row>
    <b-toast id="confirm-copy" variant="dark" title="Signature Copied!" auto-hide>The signature preview has been copied to the clipboard. Follow the instructions below to paste it in your email client.</b-toast>  
  </div>
</template>

<script>
export default {
  name: "SignatureForm",
  props: [
  ],
  data() {
    return{
      pname: 'Your Name',
      ptitle: 'Your Title',
      pdept: 'Your Department',
      pphone: 'xxx.xxx.xxxx',
      pemail: 'Your email address',
      
      name: '',
      title: '',
      dept: null,
      phone: '',
      email: '',
      
      signature: {},
      
      darkmode: false,
      
      departments: [
        {value: null, text:'-- Select Department --'},
        'Accounting',
        'Additive Manufacturing Laboratory (AML)',
        'Aramark Dining Services',
        'Arbegast Materials Processing and Joining Laboratory (AMP)',
        'Atmospheric & Environmental Sciences',
        'Biomedical Engineering',
        'Business Management in Technology',
        'Business Services',
        'Career & Professional Development Center',
        'Center for Bioenergy Research and Development (CBERD)',
        'Center for Inclusion',
        'Center of Excellence for Advanced Multidisciplinary Projects (CAMP)',
        'Chemical & Biological Engineering',
        'Chemistry, Biology & Health Sciences',
        'Civil & Environmental Engineering',
        'Composites and Polymer Engineering Laboratory (CAPE)',
        'Computer Science & Engineering',
        'Counseling Office',
        'Dean of Students Office',
        'Devereaux Library',
        'Electrical Engineering',
        'Engineering and Mining Experiment Station (EMES)',
        'Environmental Health & Safety',
        'Facilities, Risk & Services',
        'Faculty Senate',
        'Finance and Administration',
        'Financial Aid Office',
        'Financial Planning & Budget Development',
        'Geology & Geological Engineering',
        'Human Resources',
        'Humanities & Social Sciences',
        'Industrial Engineering',
        'Information Technology Services',
        'Institutional Research',
        'Ivanhoe International Center',
        'Marketing & Communications',
        'Materials & Metallurgical Engineering',
        'Materials Engineering & Science',
        'Mathematics',
        'Mechanical Engineering',
        'Military Science',
        'Mining Engineering & Management',
        'Museum of Geology',
        'Music Center',
        'Nanoscience & Nanoengineering',
        'Office of Admissions',
        'Office of Economic Development',
        'Office of Graduate Education',
'        Office of Research Affairs',
        'Office of Sponsored Programs',
        'Office of the President',
        'Office of the Provost',
        'Office of the Registrar',
        'Physical Education',
        'Physics',
        'Pre-Health Pathways',
        'Public Safety',
        'Residence Life & Community Standards',
        'Rocker Shop',
        'Science, Technology & Society',
        'Student Engagement Office',
        'Student Health',
        'Student Success Center',
        'Title IX & Student Disability Services',
        'Veterans Resource Center',
        'Women in Science & Engineering'
      ]
    }
  },
  computed:{
    dname: function() { return this.name ? this.name : this.pname },
    dtitle: function() { return this.title ? this.title : this.ptitle },
    ddept: function() { return this.dept ? this.dept : this.pdept },
    dphone: function() { return this.phone ? this.phone : this.pphone },
    demail: function() { return this.email ? this.email : this.pemail },
  },
  filters:{
  },
  methods: { 
    
    caps(val){
      val = val.toString()
      return val.toUpperCase()
    },
    
    emailformat(value){
      value = value.toString()
      return value.replace(/^\w/, this.caps).replace(/\.\w/, this.caps)
    },
    
    phoneformat(value){
      value = value.toString()
      return value.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3}.)(\d{3})(\d)/,'$1$2.$3')
    },
    
    onClick() {
      this.$nextTick (() => {
        let el = document.getElementById('signature-template')
        document.getSelection().selectAllChildren(el)
        document.execCommand("copy")
        this.$bvToast.show('confirm-copy')
    })
  },
  
  toggledark(){
    this.darkmode = !this.darkmode
    return (this.darkmode ? 'bg-dark' : 'bg-white')
    }
    
  },
}
</script>

<style lang="scss">
  .social{
    float: left;
    height: 24px;
    padding-right: 6px;
  }
</style>