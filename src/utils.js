import image1 from "assets/images/meditation.jpg";
import image2 from "assets/images/Yoga.jpg";
import image3 from "assets/images/poses.jpg";
import image4 from "assets/images/gold.png";
import image5 from "assets/images/silver.png";

export const whoWeAreText = `The first sutra is simple. You may interpret it as: Here we are,
            you’ve got everything you need, so let’s get it on. He then moves to
            the real heart of the matter, the second sutra, where he defines
            yoga. Patanjali mentions nothing here about touching your forehead
            to your toes or the fact that your sports bra should match your
            headband. The first sutra is simple. You may interpret it as: Here
            we are, you’ve got everything you need, so let’s get it on. He then
            moves to the real heart of the matter, the second sutra, where he
            defines yoga. Patanjali mentions nothing here about touching your
            forehead to your toes or the fact that your sports bra should match
            your headband. The reality is that most of us are perpetually
            thinking, planning, pontificating, living in hypothetical futures
            and imagined pasts. Our minds flit from thought to thought, feeling
            to feeling, like hummingbirds hovering, never stopping to stand
            still and taste that sweet pollen for even a second before flitting
            on to the next seductive flower.`;

export const whoWeAreHeader = `Who we are`;

export const offeringsHeader = `Offerings`;
export const packagesHeader = `Packages`;
export const packagesCardsTexts = [
  {
    src: image5,
    about: `Silver Package Offers Meditation`,
  },
  {
    src: image4,
    about: `Gold Package Offers Mediatation and Aasanas`,
  },
];
export const offeringsCardsTexts = [
  {
    src: image1,
    about: `Who we areThe point of yoga, as Patanjali reminds us, is to anchor our
              thoughts in our bodies in this particular moment, in this
              particular space in time, at this particular latitude and
              longitude while the sun shines. Yoga stills you for a moment, or
              so we hope. Except it’s not that easy because in a flash, it can
              all shift.`,
  },
  {
    src: image2,
    about: `The point of yoga, as Patanjali reminds us, is to anchor our
              thoughts in our bodies in this particular moment, in this
              particular space in time, at this particular latitude and
              longitude while the sun shines. Yoga stills you for a moment, or
              so we hope. Except it’s not that easy because in a flash, it can
              all shift.`,
  },
  {
    src: image3,
    about: `The point of yoga, as Patanjali reminds us, is to anchor our
              thoughts in our bodies in this particular moment, in this
              particular space in time, at this particular latitude and
              longitude while the sun shines. Yoga stills you for a moment, or
              so we hope. Except it’s not that easy because in a flash, it can
              all shift.`,
  },
];
export const sliderImages = [
  "https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg",
  "https://images.pexels.com/photos/3822672/pexels-photo-3822672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8436756/pexels-photo-8436756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8436612/pexels-photo-8436612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8436610/pexels-photo-8436610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4056444/pexels-photo-4056444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
export const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};
export const slidersVariants = {
  hover: {
    scale: 1.2,
    backgroundColor: "#327995",
  },
};
export const dotsVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -10,
    scale: 1.2,
    transition: { type: "spring", stiffness: 1000, damping: "10" },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};
