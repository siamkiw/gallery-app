<template>
  <div id="app">
    <vue-dropzone
      id="imgDropzone"
      ref="imgDropzone"
      :options="dropzoneOptions"
      @vdropzone-complete="afterComplete"
    ></vue-dropzone>

    <div class="container">
      <div v-if="images.length >0">
        <div class="row">
          <div v-for="image in images" :key="image.src">
            <div class="col-sm">
              <img
                :src="image.src"
                class="crop"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              />
              <PopUp :img-src="imgeSrc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
let uuid = require("uuid");
export default {
  name: "App",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      images: [],
      contentType: "",
      imageName: "",
      size: 0,
      fullPath: "",
      imgeSrc: null,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 250,
        thumbnailHeight: 250,
        addRemoveLinks: false,
        acceptedFiles: ".jpg, .jpeg, .png",
      },
    };
  },
  methods: {
    async afterComplete(file) {
      try {
        const imageName = uuid.v1();
        var metaData = {
          contentType: "image/png",
        };

        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`images/${imageName}.png`);

        await imageRef.put(file, metaData);

        const downloadUrl = await imageRef.getDownloadURL();
        const metadata = await imageRef.getMetadata();

        this.images.push({ src: downloadUrl });
        this.imgeSrc = { src: downloadUrl };
        this.store(metadata);

        this.$refs.imgDropzone.removeFile(file);
      } catch (error) {
        console.log(error);
      }
    },
    store(data) {
      axios
        .post("/p", {
          contentType: data.contentType,
          imageName: data.name,
          size: data.size,
          fullPath: data.fullPath,
        })
        .then((res) => {
          let resData = JSON.parse(res.config.data);
          console.log(resData, "form axios");
        });
    },
  },
};
</script>

<style>
.img-div {
  display: flex;
  margin: 25px;
}

img {
  max-width: 300px;
  margin: 15px;
}

.crop {
  object-fit: cover;
  width: 300px;
  height: 300px;
}

.modal-image {
  min-width: 775px;
}

* {
  padding: 0;
}

.big-icon {
  font-size: 175px;
  margin: 15px;
}
</style>