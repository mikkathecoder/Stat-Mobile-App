<template>
    <view>
      <team-logo :teamLogo="team.logo"></team-logo>
      <next-match :nextMatch="team.nextMatch"></next-match>
      <starting-lineup :startingLineup="team.startingLineup"></starting-lineup>
    </view>
  </template>
  
  <script>
  import TeamLogo from './TeamLogo.vue';
  import NextMatch from './NextMatch.vue';
  import StartingLineup from './StartingLineup.vue';
  
  export default {
    components: {
      TeamLogo,
      NextMatch,
      StartingLineup,
    },
    data() {
      return {
        team: {
          logo: 'url-to-team-logo',
          nextMatch: { details: 'details of the next match' },
          startingLineup: [
            { name: 'Player 1' },
            { name: 'Player 2' },
            // ...
          ],
        },
      };
    },
  };
  </script>
  