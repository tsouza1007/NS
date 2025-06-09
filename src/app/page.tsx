"use client";

import Hero from "@/components/ui/Hero";
import heroContent from "@/lib/Props/LandingPageProps/herocontent";
import JournalTypes from "@/components/ui/JournalTypes";
import journalTypesContent from "@/lib/Props/LandingPageProps/JournalTypesContent";
import journalTipsContent from "@/lib/Props/LandingPageProps/JournalTipsContent";
import JournalTips from "@/components/JournalTips";
import { Fragment } from "react";

export default function Home() {

  return (
    <Fragment>
      <Hero {...heroContent} />
      <JournalTypes items={journalTypesContent.items} />
      <JournalTips items={journalTipsContent.items} />
    </Fragment>
  );
}
