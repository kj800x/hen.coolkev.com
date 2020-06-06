function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

const QUOTES = [
  "Do turtles ever remind you guys of battering rams?",
  "I wish I had cancer, if it was good for the children",
  "Jamie is like a pineapple with hair... You're sharp, prickly, and taste acidic to my mouth",
  "It's like getting laid twice... but you can't have both",
  "Jesus, we have identified the target... I'm a ladybug",
  "I'm dumber than a little child on a rottweiler",
  "Baited like juked",
  "I am an Orc, I smell like Jezus on the cross",
  "Are we going to go consume edible children?",
  "I will annihilate your dick, as the trojans annihilated troy",
  "I will enter your urethra and expand",
  "The fetus position is the worst defensive position. You can be kick in 69 different locations by a penis",
  "Extrapolate your eyes",
  "My hands have the touch of a complex snake.  It's like a snake that can fold on itself, and when it does it can fold under your skin",
  "Stop objectifying your manhood in front of me",
  "I am in a complex state of wordedness",
  "If I have the fury of 1,000 suns, then I have the weight of 1,000 suns",
  "I should get one of those, and when it sets on fire I would be Aladdin",
  "Wait... I thought boy scouts didn't use chairs",
  "I will trojan horse your anus",
  "Do you know what RKO stands for? Rice Krispy Overdose",
  "If I were reincarnated into a flower, I would decompose myself",
  "What if we took human oxygen cells and replaced them all with helium? Would they float",
  "Wakey wakey, shakey the baby",
  "When you feel the liquid enter my body, I know I'm about to be penetrated",
];

const pickQuote = () => {
  const today = new Date();
  const rng = new Math.seedrandom(
    `${today.getDate()}-${today.getMonth()}${today.getFullYear()}`
  );
  return Math.abs(rng.int32()) % QUOTES.length;
};

ready(() => {
  document.getElementById("quote").innerHTML = QUOTES[pickQuote()];
});
