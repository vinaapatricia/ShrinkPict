
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { GlobeLock } from "lucide-react";

export const navItems = [
  { label: "Advantage", href: "#Advantage" },
  { label: "Workflow", href: "#Workflow" },
  { label: "Contribute", href: "#Contribute" },
];


export const features = [
  {
    icon: <GlobeLock />,
    text: "Effortless Compression",
    description:
      "Simply upload your images and audio files. Our intuitive interface makes compression a breeze.	No technical knowledge required - we handle the optimization process seamlessly.",
  },
  {
    icon: <Fingerprint />,
    text: "Security and Privacy",
    description:
      "Rest assured, your uploaded files are processed securely on our servers. We prioritize user privacy and ensure your media files remain confidential.",
  },
  {
    icon: <ShieldHalf />,
    text: "Format Flexibility",
    description:
      "Our platform supports a wide range of image and audio formats, ensuring compatibility with your diverse media library.Compress images (JPEG, PNG, etc.) and audio (MP3, WAV, etc.) for optimal results.",
  },
];

export const checklistItems = [
  {
    title: "Drag? Nah, We Got Telepathy",
    description:
      "Simply think about your images and audio, and our mind-reading servers will instantly upload them. ",
  },
  {
    title: "Format Flexibility is Our Middle Name",
    description:
      "We're fluent in the language of media formats and we'll optimize them like a boss.",
  },
  {
    title: "Batch Processing? More Like Batch Rocketing",
    description:
      "Our batch processing feature lets you launch them all into compression heaven at once.",
  },
  {
    title: "Security You Can Trust",
    description:
      "We take your privacy seriously. Your files are treated with the utmost care and confidentiality, like top-secret mission data. ",
  },
];

export const ContributionOptions = [
  {
    title: "ShrinkPict is Open Source",
    description: [
      "We are Open Source Innovators, feel free to contribute to official GitHub repo of PicWise and help us improve our platform."
    ],
  },
];

export const FeatureOptions = [
  {
    title: "Compress Image",
    features: [
      "remove bits of image information in order to reduce its overall size",
    ],
  },
  {
    title: "Compress Audio",
    features: [
      "remove bits of audio information in order to reduce its overall size",
    ],
  },
];

