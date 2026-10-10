/**
 * Rough Draft microcopy: single source of truth for real UI strings.
 * `tone` = position on the tone dial (1 loud → 5 gentle).
 */
export type ToneLevel = 1 | 2 | 3 | 4 | 5;

export const TONE_DIAL: Array<{
  level: ToneLevel;
  name: string;
  where: string;
  rules: string[];
  voices: string;
  motion: string;
  example: string;
}> = [
  {
    level: 1,
    name: 'loud',
    where: 'Marketing, campaigns, posters, app-store, social.',
    rules: ['BIG DECLARATIVE HEADLINES', 'one joke per surface, max', 'provocation is fine if it’s kind underneath'],
    voices: 'Display + brush + stickers',
    motion: 'Slap, stamp, wiggle',
    example: 'YOUR COMFORT ZONE WILL KILL YOU. (we’ll hold your hand on the way out.)',
  },
  {
    level: 2,
    name: 'playful',
    where: 'Onboarding, success, empty states, celebrations.',
    rules: ['lowercase-friendly', 'humour first, then the useful bit', 'characters can talk'],
    voices: 'Display headline + workhorse body, one brush accent',
    motion: 'Pop, slap (short)',
    example: 'logged. that counts.',
  },
  {
    level: 3,
    name: 'friendly',
    where: 'Default UI: navigation, settings, forms, buttons.',
    rules: ['plain verbs on buttons', 'short sentences', 'slang only if it’s clearer'],
    voices: 'Workhorse; display for page titles',
    motion: 'Snappy UI motion only',
    example: 'who can see this?',
  },
  {
    level: 4,
    name: 'calm',
    where: 'Errors, privacy, account, payments, data deletion.',
    rules: ['say what happened, then what to do', 'never blame the user', 'one light touch allowed, if recovery is easy'],
    voices: 'Workhorse only',
    motion: 'Fades, no bounce',
    example: 'that didn’t save. your words are still here. try again?',
  },
  {
    level: 5,
    name: 'gentle',
    where: 'Distress, crisis, health content, grief, a "heavy" check-in.',
    rules: ['no jokes, no slang, no stickers', 'sentence case, plain words', 'support is visible without scrolling', 'never rush: no timers, no auto-dismiss'],
    voices: 'Workhorse only. No display, no brush.',
    motion: 'None beyond fades',
    example: "You don't have to go through this alone. You can talk to someone right now.",
  },
];

export type Line = { context: string; line: string; tone: ToneLevel; note?: string };

export const MICROCOPY: Line[] = [
  // buttons
  { context: 'Button · primary', line: 'post it', tone: 3 },
  { context: 'Button · save', line: 'save to drafts', tone: 3 },
  { context: 'Button · dismiss', line: 'not now', tone: 3, note: 'Never "no thanks, I don’t want to feel better".' },
  { context: 'Button · skip check-in', line: 'not today', tone: 3 },
  { context: 'Button · destructive', line: 'delete this draft', tone: 4, note: 'Name the thing. No jokes on destructive actions.' },
  // onboarding
  { context: 'Onboarding · hello', line: "HI. WE'RE NOT HERE TO FIX YOU.", tone: 1 },
  { context: 'Onboarding · sub', line: 'this is a place to check in, write stuff down and find your people. at your pace.', tone: 2 },
  { context: 'Onboarding · notifications', line: 'want a nudge? one a day, max. we’ll never guilt-trip you.', tone: 2 },
  // empty states
  { context: 'Empty · drafts', line: 'NOTHING HERE YET', tone: 2 },
  { context: 'Empty · drafts body', line: 'your first draft can be one word. honestly, "ugh" counts.', tone: 2 },
  { context: 'Empty · community', line: 'quiet in here. say something and it won’t be.', tone: 2 },
  // success
  { context: 'Success · check-in', line: 'logged. that counts.', tone: 2 },
  { context: 'Success · post', line: 'it’s out there. you made a thing.', tone: 2 },
  { context: 'Success · 7 check-ins', line: 'SEVEN CHECK-INS. not a streak, just a lot of showing up.', tone: 1 },
  // errors
  { context: 'Error · generic', line: 'we broke something. not you, us. try again in a sec?', tone: 4 },
  { context: 'Error · offline', line: 'you’re offline. your draft is saved on this phone and will sync later.', tone: 4 },
  { context: 'Error · validation', line: 'that email’s missing an @. happens to everyone.', tone: 4 },
  { context: 'Error · save failed', line: 'that didn’t save. your words are still here. try again?', tone: 4 },
  // notifications
  { context: 'Push · daily', line: 'quick one: how’s the weather in there?', tone: 2 },
  { context: 'Push · reply', line: 'mo replied to your draft: "same. every word."', tone: 3 },
  { context: 'Push · evening', line: 'you’re allowed to cancel plans tonight.', tone: 2 },
  { context: 'Push · after a heavy day', line: 'Thinking of you after yesterday. No need to reply.', tone: 5, note: 'Only if the user opted in to follow-ups.' },
  // sensitive
  { context: 'Gentle · heavy check-in', line: 'heavy days are real. you don’t have to fix this one.', tone: 5 },
  { context: 'Gentle · support', line: 'If it feels like too much right now, you can talk to someone today. It’s free and confidential.', tone: 5 },
  { context: 'Gentle · content note', line: 'This post talks about self-harm. Show it?', tone: 5 },
  // privacy
  { context: 'Privacy · hint', line: 'only you can see this.', tone: 3 },
  { context: 'Privacy · publish', line: 'posting to the zine makes this public. you can unpublish any time.', tone: 4 },
];

export const DO_DONT: Array<{ do: string; dont: string; why: string }> = [
  { do: "you're allowed to cancel plans", dont: 'Prioritise your needs', why: 'Specific beats generic.' },
  { do: 'logged. that counts.', dont: 'Great job! You’re crushing your wellness goals! 🎉', why: 'No toxic positivity, no optimisation language.' },
  { do: 'heavy days are real.', dont: 'Turn that frown upside down!', why: 'Never joke during vulnerable moments.' },
  { do: 'how’s the weather in there?', dont: 'Rate your mood from 1–10', why: 'Expressive, not clinical.' },
  { do: 'not today', dont: 'Skip (you’ll lose your streak)', why: 'No guilt. Ever. We don’t do streaks.' },
  { do: 'we broke something. not you, us.', dont: 'Error 500: Invalid request', why: 'Human, and takes the blame.' },
  { do: 'say more? (or don’t)', dont: 'Journal entry (required)', why: 'Optional is the default for feelings.' },
  { do: 'find your people', dont: 'Join our wellness community today', why: 'If it sounds like an ad, cut it.' },
  { do: 'it’s out there. you made a thing.', dont: 'Your post has been successfully submitted.', why: 'Celebrate the human, not the system.' },
  { do: 'you’re offline. your draft is saved on this phone.', dont: 'Oops! Something went wrong :(', why: 'Say what happened and what’s safe.' },
  { do: '(no slang here)', dont: 'no cap this app is bussin fr fr', why: 'Slang sparingly. If it sounds like a brand trying to be cool, cut it.' },
  { do: 'You can talk to someone right now.', dont: 'lol rough day? we got u 💀', why: 'Gentle contexts drop jokes and slang entirely.' },
];
