<template>
  <div class="m-auto">
    <div class="max-w-sm rounded overflow-hidden shadow-xl">
      <div class="px-6 py-4">
        <p class="text-gray-700 text-base mb-8">
          Enter your data plan capacity and select a streaming quality to
          calculate how much Spotify you can listen on a given month:
        </p>
        <div class="mb-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="input-dataplan"
          >
            Data plan (GBs/month)
          </label>
          <input
            id="input-dataplan"
            v-model="dataplan"
            class="block appearance-none w-full bg-gray-300 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
            min="1"
            max="99"
            autofocus
            step="1"
            @keyup="validateDataPlan"
          />
        </div>
        <div class="mb-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="input-quality"
          >
            Streaming quality
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              class="text-green-600"
              href="https://support.spotify.com/us/using_spotify/system_settings/high-quality-streaming/"
              >[?]</a
            >
          </label>
          <div class="relative">
            <select
              id="input-quality"
              v-model="quality"
              class="block appearance-none w-full bg-gray-300 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="24">Low (24 Kbps)</option>
              <option value="96">Normal (96 Kbps)</option>
              <option value="160">High (160 Kbps)</option>
              <option value="320">Very High (320 Kbps)</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="mb-5 text-center">
          <p>
            You can Listen to
          </p>
          <div class="text-6xl font-bold text-green-500">
            <span v-if="monthly > 0">{{ monthly }}</span>
            <span v-else>—</span>
          </div>
          <p>
            hours of music on Spotify!
          </p>
          <p class="text-gray-600 text-sm">
            <span v-if="daily < 0">Enter a valid data plan!</span>
            <span v-else-if="daily < 24">
              (That's about
              <strong class="text-green-500">{{ daily }}</strong> hours per
              day)</span
            >
            <span v-else-if="daily > 24"
              >(That's more than you can hear in a day!)</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataplan: '1',
      quality: 96
    }
  },
  computed: {
    monthly() {
      const kbInPlan = this.dataplan * 8000000
      const totalSeconds = kbInPlan / this.quality
      const totalHours = totalSeconds / 3600

      return totalHours.toFixed(1)
    },
    daily() {
      const daily = this.monthly / 30
      return daily.toFixed(1)
    }
  },
  methods: {
    validateDataPlan() {
      if (this.dataplan > 99) {
        this.dataplan = 99
      }
    }
  }
}
</script>
