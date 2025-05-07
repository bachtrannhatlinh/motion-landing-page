type ContainerData = {
  id: number;
  title: string;
  sub: string;
  content: string;
  buttonText: string;
}

type PartnerData = {
  id: number;
  name?: string;
  logo: string;
  description?: string;
}

type EmPowerData = {
  id: number;
  title: string;
  sub: string;
  content: string;
  logo: string;
}

type FAQData = {
  id: number;
  question: string;
}

export type { ContainerData, PartnerData, EmPowerData, FAQData };