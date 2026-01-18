
export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export enum AgentRole {
    FACILITATOR = 'Facilitateur',
    CO_CREATOR = 'Co-Créateur',
    ASSISTANT = 'Assistant',
    ORCHESTRATOR = 'Orchestrateur'
}

export interface Agent {
    role: AgentRole;
    emoji: string;
    description: string;
    capabilities: string[];
}
