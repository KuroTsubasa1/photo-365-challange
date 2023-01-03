<template>

  <div class="card  text-white bg-dark " style="width: 30rem;">
    <div class="card-body">


      <h4 class="card-title text-center mb-4">Foto hochladen</h4>


      <div class="row mb-3">
        <label for="inputName" class="col-sm-4 col-form-label">Name des Foto"s</label>
        <div class="col-sm-8">
          <input v-model="photo_name" type="text" class="form-control  text-white" id="inputName">
        </div>
      </div>

      <!--
      <div class="row mb-3">
        <label for="inputName" class="col-sm-4 col-form-label">Challange</label>
        <div class="col-sm-8">
          <input v-model="challange_of_the_day_text" type="text" class="form-control text-white" id="inputName"
                 disabled>
        </div>
      </div>

      -->


      <div class="row mb-3">
        <label for="inputName" class="col-sm-4 col-form-label">Challange</label>
        <div class="col-sm-8">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option v-for="(prompt,index) in prompts">{{prompt.text}}</option>
          </select>
        </div>
      </div>


      <div class="row mb-5">
        <label for="inputName" class="col-sm-4 col-form-label">Wähle ein Foto</label>
        <div class="col-sm-8">
          <input class="form-control text-white" type="file" id="formFile">
        </div>
      </div>


      <div class="row mt-1">
        <div class="col-sm-12">
          <input v-on:click="tryUpload" type="button" class="form-control btn btn-dark" id="inputSend"
                 value="Hochladen">
        </div>
      </div>


    </div>
  </div>

</template>

<script>
export default {
  name: "UploadForm",
  data() {
    return {
      photo_name: "",
      challange_of_the_day_text: "",
      challange_of_the_day_id: "",
      prompts: [],
    }
  },
  created() {
    // get current date
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    currentDate = `${cDay}.${cMonth}`;

    this.fetchPrompt(currentDate);

    for (const date of this.lastThreeDates()) {
      this.fetchPrompt(date);
    }

    console.log(this.prompts)
  },
  methods:
      {
        lastThreeDates: function () {
          const today = new Date();
          const dates = [];
          for (let i = 1; i <= 3; i++) {
            const date = new Date(today.getTime() - (i * 24 * 60 * 60 * 1000));
            const day = date.getDate();
            const month = date.getMonth() + 1;
            dates.push(`${day}.${month}`);
          }
          return dates;
        },
        fetchPrompt: function (date) {
          // create request url
          let link = `https://pocket.lasseharm.space/api/collections/prompts/records?filter=(date='${date}')`;

          fetch(link)
              .then(response => response.json())
              .then(json => {
                    if (json.items.length === 0) {
                      this.prompts.push(
                          {
                            id: null,
                            text: "There is no prompt of the day 😭",
                            date:date,
                          }
                      )
                      return
                    }

                    //TODO pick random if there are more than one
                    this.prompts.push(
                        {
                          id: json.items[0].id,
                          text: json.items[0].prompt_text,
                          date:json.items[0].date,
                        }
                    )
                  }
              )
        },
      }

}
</script>

<style scoped>
</style>

