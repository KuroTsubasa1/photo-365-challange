<template>
  <div>
    <h2>
      Das Thema des Tages lautet :
    </h2>
    <h1 class="prompt-of-the-day">
      <strong>
        {{ prompt }}
      </strong>
    </h1>
  </div>
</template>

<script>
var link = "https://pocket.lasseharm.space/api/collections/prompts/records?filter=(";
export default {
  data() {
    return {
      prompt: "Loading ...",
      titleClass: 'title foo'
    }
  },
  created() {
    this.fetchPrompt();
  },
  methods:
      {
        fetchPrompt: function () {

          // get current date
          let currentDate = new Date();
          let cDay = currentDate.getDate()
          let cMonth = currentDate.getMonth() + 1

          // fill with zero
          if(cDay < 10)
          {
            cDay = '0'+cDay;
          }

          if(cMonth < 10)
          {
            cMonth = '0'+cMonth;
          }

          currentDate = `${cDay}.${cMonth}`;

          // create request url
          link = `https://pocket.lasseharm.space/api/collections/prompts/records?filter=(date='${currentDate}')`;

          fetch(link)
              .then(response => response.json())
              .then(json => {
                    console.log(json);
                    if (json.items.length === 0) {
                      this.prompt = "There is no prompt of the day 😭";
                      return
                    }

                    //TODO pick random if there are more than one
                    this.prompt = json.items[0].prompt_text;
                  }
              )
        }
      }
}
</script>

<style>
.prompt-of-the-day
{
  text-align: center;
}
</style>


