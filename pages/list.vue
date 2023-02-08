<template>

  <div class="flex flex-column mt-5 lg:w-[1000px] mb-5 text-center">

    <div class="flex flex-row mb-3 justify-center">
      <h1>
        Challenge List
      </h1>
    </div>

    <div class="flex flex-column justify-center">

      <ListRow v-for="(date) in dates" :date="date.date" :prompt="date.prompt" :number="date.number"></ListRow>

    </div>


  </div>

</template>

<script setup>
import {default as helper } from '../utils/userHelper'

async function aggregateData()
{
  const dates = helper.getDates()

  let i = 1;

  const result = []

  for (const datesKey in dates) {
    let tmpDate = {}

    const datesKeySplit = datesKey.split('.')

    const zeroFilledDate = helper.fillDateWithZeros(datesKeySplit[0],datesKeySplit[1])

    const prompt = await helper.getPromptOfTheDay(`${zeroFilledDate.day}.${zeroFilledDate.month}`)

    tmpDate.date = helper.fillDateWithZeros(datesKey).day
    tmpDate.prompt = prompt.prompt
    tmpDate.number =  (i++).toString()

    result.push(tmpDate)
  }
  return result
}

const dates =  await aggregateData()

</script>

<style scoped>

</style>