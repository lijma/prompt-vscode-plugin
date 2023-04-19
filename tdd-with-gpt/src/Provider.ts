import { Scenario } from "./Scenario";
import { Diff } from "./Diff";

export interface Provider {
    produceDiff(scenario: Scenario): Promise<Diff>;
  }