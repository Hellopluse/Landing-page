# Hello Pulse AI Backend

**Agent Assistant MVP** - Backend Python avec architecture MCP pour la plateforme de co-création Hello Pulse

[![Python 3.12+](https://img.shields.io/badge/python-3.12+-blue.svg)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-green.svg)](https://fastapi.tiangolo.com/)
[![Pydantic AI](https://img.shields.io/badge/Pydantic%20AI-latest-purple.svg)](https://ai.pydantic.dev/)
[![MCP](https://img.shields.io/badge/MCP-Enabled-orange.svg)](https://modelcontextprotocol.io)

---

## 📋 Vue d'Ensemble

Backend implémentant l'**Agent Assistant** de Hello Pulse, un agent IA conversationnel spécialisé dans la facilitation créative et les méthodologies de co-création.

## 🏗️ Complete System Architecture

```
┌─────────────────────────────────────────────────┐
│              USER REQUEST                       │
│  "Build a REST API for managing todos"          │
└───────────────────┬─────────────────────────────┘
                    ↓
┌───────────────────────────────────────────────────┐
│           ORCHESTRATOR (Manus-style)              │
│  ┌─────────────────────────────────────────────┐  │
│  │ 1. Parse user request                       │  │
│  │ 2. Invoke PlannerAgent                      │  │
│  │ 3. Create WorkflowTool DAG                  │  │
│  │ 4. Start iterative execution loop           │  │
│  │ 5. Monitor progress & collect results       │  │
│  │ 6. Enable async background execution        │  │
│  └─────────────────────────────────────────────┘  │
└───────────┬───────────────────────────────────────┘
            ↓
    ┌──────────────────────────────────────┐
    │   ITERATIVE AGENT LOOP               │
    │   (Core of Autonomy)                 │
    │                                      │
    │  ┌────────────────────────────────┐  │
    │  │ 1️⃣ ANALYZE EVENT STREAM        │  │
    │  │   - What happened so far?      │  │
    │  │   - What's the current state?  │  │
    │  │   - Get next task from DAG     │  │
    │  └────────────────────────────────┘  │
    │            ↓                         │
    │  ┌────────────────────────────────┐  │
    │  │ 2️⃣ SELECT AGENT/TOOLS          │  │
    │  │   - Route to right agent       │  │
    │  │   - Choose appropriate tools   │  │
    │  │   - Prepare context/params     │  │
    │  └────────────────────────────────┘  │
    │            ↓                         │
    │  ┌────────────────────────────────┐  │
    │  │ 3️⃣ EXECUTE IN SANDBOX          │  │
    │  │   - Run in E2B environment     │  │ 
    │  │   - Execute via tools          │  │
    │  │   - Capture all outputs        │  │
    │  └────────────────────────────────┘  │
    │            ↓                         │
    │  ┌────────────────────────────────┐  │
    │  │ 4️⃣ UPDATE & ITERATE            │  │
    │  │   - Log to event stream        │  │
    │  │   - Update WorkflowTool status │  │
    │  │   - Self-correct if errors     │  │
    │  │   - Loop until task complete   │  │
    │  └────────────────────────────────┘  │
    │                                      │
    │  Repeat until all tasks done ↻       │
    └──────────────────────────────────────┘
            ↓
    ┌───────────────────────────────┐
    │   SPECIALIZED AGENTS          │
    │   (Multi-Agent System)        │
    ├───────────────────────────────┤
    │                               │
    │  📋 PlannerAgent              │
    │     - Analyzes request        │
    │     - Creates task DAG        │
    │     - Uses DeepResearch       │
    │     - Defines dependencies    │
    │                               │
    │  💻 CoderAgent                │
    │     - Generates code          │
    │     - Uses CodeAct approach   │
    │     - Writes Python scripts   │
    │     - Combines multiple tools │
    │                               │
    │  🧪 RunnerAgent               │
    │     - Executes tests          │
    │     - Validates results       │
    │     - Captures metrics        │
    │     - Reports status          │
    │                               │
    │  🐛 DebuggerAgent (new)       │
    │     - Analyzes errors         │
    │     - Generates fixes         │
    │     - Retries with changes    │
    │     - Self-correcting         │
    │                               │
    │  🚀 DeployerAgent (new)       │
    │     - Deploys applications    │
    │     - Manages env configs     │
    │     - Handles migrations      │
    │     - Monitors health         │
    │                               │
    └───────────────────────────────┘
            ↓
    ┌───────────────────────────────┐
    │   TOOL ECOSYSTEM              │
    │   (Your 10 Production Tools)  │
    ├───────────────────────────────┤
    │                               │
    │  🔧 E2B Sandbox               │
    │     → CodeAct execution!      │
    │     → Isolated environment    │
    │                               │
    │  💻 Terminal                  │
    │     → Shell commands          │
    │     → Process management      │
    │                               │
    │  🌐 Browser                   │
    │     → Web scraping            │
    │     → UI testing              │
    │                               │
    │  📦 Git                       │
    │     → Version control         │
    │     → Code management         │
    │                               │
    │  📁 FileSystem                │
    │     → File operations         │
    │     → Directory management    │
    │                               │
    │  🐍 Python REPL               │
    │     → Quick testing           │
    │     → RestrictedPython safe   │
    │                               │
    │  🌍 HTTP Client               │
    │     → API calls               │
    │     → Web requests            │
    │                               │
    │  🔍 Search (DDG + Tavily)     │
    │     → Research                │
    │     → Knowledge gathering     │
    │                               │
    │  📊 WorkflowTool              │
    │     → Task orchestration      │
    │     → DAG management          │
    │                               │
    └───────────────────────────────┘
            ↓
    ┌───────────────────────────────┐
    │   PERSISTENT STATE            │
    │   (PostgreSQL Database)       │
    ├───────────────────────────────┤
    │                               │
    │  📊 Workflows Table           │
    │     - Workflow metadata       │
    │     - Overall status          │
    │     - Progress tracking       │
    │                               │
    │  ✅ Tasks Table               │
    │     - Individual tasks        │
    │     - Dependencies (JSONB)    │
    │     - Outputs & artifacts     │
    │     - Status (DAG positions)  │
    │                               │
    │  📝 Task Updates              │
    │     - Status change history   │
    │     - Audit trail             │
    │                               │
    │  🧠 Agent Memory (new)        │
    │     - Event stream log        │
    │     - Agent decisions         │
    │     - Action results          │
    │     - Chronological history   │
    │                               │
    │  👤 User Preferences (new)    │
    │     - Coding styles           │
    │     - Tool preferences        │
    │     - Learned patterns        │
    │                               │
    └───────────────────────────────┘
```

### Fonctionnalités

- ✅ **Agent Assistant** Pydantic AI + Gemini 2.0 Flash
- ✅ **MCP Servers** : Tavily (web search), SearxNG (metasearch)
- ✅ **Extraction Sources** : URLs automatiquement extraites des résultats
- ✅ **API REST** FastAPI avec documentation OpenAPI
- ✅ **Type-safe** Pydantic pour validation automatique
- ✅ **Docker Services** SearxNG + Redis

---

## 🚀 Installation Rapide

### Prérequis

- **Python 3.12+**
- **Node.js 18+** (pour MCP servers)
- **Docker** (pour SearxNG)
- **UV** (recommandé) ou pip

### Installation Complète

```bash
# 1. Installer les dépendances Python
uv venv && source .venv/bin/activate
uv pip install -e ".[dev]"

# 2. Configurer l'environnement
cp .env.example .env
# Éditer .env et ajouter vos clés API

# 3. Installer les MCP servers (Tavily + SearxNG + Docker)
chmod +x scripts/setup.sh
./scripts/setup.sh
```

Le script `setup.sh` va :
- ✅ Installer Tavily MCP (via npx)
- ✅ Installer SearxNG MCP (global npm)
- ✅ Démarrer SearxNG + Redis (Docker)
- ✅ Générer les secrets nécessaires

### Variables d'Environnement

Éditez `.env` et ajoutez :

```bash
# Requis
GOOGLE_API_KEY=votre_clé_gemini
TAVILY_API_KEY=votre_clé_tavily

# Auto-générés par setup.sh
SEARXNG_SECRET_KEY=<généré>
SEARXNG_URL=http://localhost:8888
```

Obtenir vos clés :
- **Gemini** : https://aistudio.google.com/apikey
- **Tavily** : https://tavily.com

---

## 🏃 Utilisation

### Démarrer le Serveur

```bash
# Mode développement (auto-reload)
python -m hello_pulse
```

Serveur disponible sur **http://localhost:8000**

### Tester l'API

```bash
# Health check
curl http://localhost:8000/health

# Chat avec recherche web
curl -X POST http://localhost:8000/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Quelles sont les tendances IA pour 2025 ?"
  }'
```

**Réponse** :
```json
{
  "response": "D'après les analyses récentes...",
  "sources": [
    {
      "type": "web_search",
      "title": "AI Trends 2025",
      "url": "https://example.com/ai-trends",
      "snippet": null
    }
  ],
  "session_id": "uuid",
  "timestamp": "2025-12-13T..."
}
```

### Documentation API

- **Swagger UI** : http://localhost:8000/docs
- **ReDoc** : http://localhost:8000/redoc

---

## 🛠️ Configuration MCP

Les MCP servers sont configurés dans [`src/hello_pulse/config/mcp_config.json`](file:///home/amiche/Projects/AI/hello-pulse-ai/src/hello_pulse/config/mcp_config.json) :

```json
{
  "mcpServers": {
    "tavily": {
      "command": "npx",
      "args": ["-y", "tavily-mcp"],
      "env": {
        "TAVILY_API_KEY": "${TAVILY_API_KEY}"
      }
    },
    "searxng": {
      "command": "npx",
      "args": ["-y", "mcp-searxng"],
      "env": {
        "SEARXNG_URL": "${SEARXNG_URL}"
      }
    }
  }
}
```

### Gérer les Services Docker

```bash
# Démarrer SearxNG + Redis
docker compose up -d

# Vérifier le statut
docker ps

# Arrêter les services
docker compose down

# Voir les logs
docker logs searxng
```

**SearxNG UI** : http://localhost:8888

---

## 📁 Structure du Projet

```
hello-pulse-ai/
├── src/hello_pulse/
│   ├── agents/              # Agents IA
│   │   └── assistant/
│   │       ├── agent.py     # Agent principal + extraction sources
│   │       ├── config.py
│   │       └── prompts.py
│   ├── api/                 # API FastAPI
│   │   ├── routes/
│   │   ├── schemas/
│   │   └── main.py
│   ├── config/              # Configuration
│   │   ├── settings.py
│   │   └── mcp_config.json  # MCP servers config
│   ├── mcp/                 # MCP Manager
│   │   └── mcp_manager.py
│   └── utils/
├── scripts/
│   ├── setup.sh      # Installation MCP + Docker
│   ├── clean.sh             # Nettoyage complet
│   └── setup_env.sh
├── docker-compose.yml       # SearxNG + Redis
├── tests/
└── docs/
```

---

## 🧪 Tests

```bash
# Installer les dépendances de test
uv pip install -e ".[dev]"

# Lancer les tests
pytest

# Avec coverage
pytest --cov=hello_pulse --cov-report=html

# Tests d'intégration seulement
pytest tests/integration/
```

---

## 🔧 Développement

### Scripts Disponibles

```bash
# Installation complète
./scripts/setup.sh

# Nettoyage (images Docker, npm packages, etc.)
./scripts/clean.sh

# Configuration environnement
./scripts/setup_env.sh
```

### Ajouter un Nouveau MCP Server

1. **Éditer** `src/hello_pulse/config/mcp_config.json` :
```json
{
  "mcpServers": {
    "nouveau_server": {
      "command": "npx",
      "args": ["-y", "mon-mcp-server"],
      "env": {
        "API_KEY": "${MON_API_KEY}"
      }
    }
  }
}
```

2. **Ajouter** la clé API dans `.env` :
```bash
MON_API_KEY=votre_clé
```

3. **Redémarrer** le serveur - le MCPManager chargera automatiquement le nouveau server !

### Extraction des Sources

L'agent extrait automatiquement les sources des MCP servers :

```python
# Format générique supporté
sources = [
    {
        "type": "web_search",      # ou "knowledge_base", "tool"
        "title": "Titre de la source",
        "url": "https://...",       # optionnel
        "snippet": "Extrait..."     # optionnel
    }
]
```

Formats supportés :
- ✅ **Text structuré** (Tavily MCP) : `Title: ... \n URL: ...`
- ✅ **JSON** : `{"results": [...]}`
- ✅ **Dict** : `{"url": "...", "title": "..."}`
- ✅ **List** : `[{...}, {...}]`

---

## 📚 Documentation

- **Architecture** : [`docs/architecture/`](file:///home/amiche/Projects/AI/hello-pulse-ai/docs/architecture/)
- **MCP Guide** : [`docs/architecture/MCP/`](file:///home/amiche/Projects/AI/hello-pulse-ai/docs/architecture/MCP/)
- **API Schema** : http://localhost:8000/openapi.json

---

## 🐛 Dépannage

### SearxNG ne démarre pas

```bash
# Vérifier les logs
docker logs searxng

# Redémarrer
docker restart searxng

# Si erreur settings.yml
sudo nano mcp_servers/searxng/settings/settings.yml
# Vérifier que "hotkeys: default" (pas "disabled")
```

### MCP Server ne se charge pas

```bash
# Vérifier la config
cat src/hello_pulse/config/mcp_config.json

# Tester manuellement
npx -y tavily-mcp --help

# Vérifier les variables d'environnement
env | grep -E "(TAVILY|SEARXNG|GOOGLE)"
```

### Erreur "No module named hello_pulse"

```bash
# Réinstaller en mode éditable
pip install -e .
```

---

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amazing`)
3. Commit (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing`)
5. Ouvrir une Pull Request

---

## 📄 Licence

Ce projet fait partie de la plateforme Hello Pulse.

---

## 🔗 Liens Utiles

- **Pydantic AI** : https://ai.pydantic.dev
- **Model Context Protocol** : https://modelcontextprotocol.io
- **Tavily API** : https://tavily.com
- **SearxNG** : https://docs.searxng.org

---

**Made with ❤️ by Hello Pulse Team**
