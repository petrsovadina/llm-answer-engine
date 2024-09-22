<h1 align="center">Perplexity-Inspired LLM Answer Engine</h1>
<div>
    <div align="center">
        <a href="https://twitter.com/dev__digest">
            <img src="https://img.shields.io/badge/X/Twitter-000000?style=for-the-badge&logo=x&logoColor=white" />
        </a>
        <a href="https://www.youtube.com/@developersdigest">
            <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" />
        </a>
    </div>
    <div align="center">
    <a href="https://trendshift.io/repositories/8642" target="_blank"><img src="https://trendshift.io/api/badge/repositories/8642" alt="developersdigest%2Fllm-answer-engine | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
    </div>
</div>
<div align="center">
<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjVodHcyZWd0MDJtd2RiN2xqbGdtOTdrYzZiMnhlMmZidDRzYm15dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PXkHjFlbgty03C6TAL/giphy.gif"><br>
</div>

Tento repozitář obsahuje kód a instrukce potřebné k vytvoření sofistikovaného stroje na odpovědi, který využívá schopnosti [Groq](https://www.groq.com/), [Mistral AI's Mixtral](https://mistral.ai/news/mixtral-of-experts/), [Langchain.JS](https://js.langchain.com/docs/), [Brave Search](https://search.brave.com/), [Serper API](https://serper.dev/), a [OpenAI](https://openai.com/). Navržen tak, aby efektivně vrátil zdroje, odpovědi, obrázky, videa a následné otázky na základě dotazů uživatele, je tento projekt ideálním výchozím bodem pro vývojáře, kteří se zajímají o zpracování přirozeného jazyka a vyhledávací technologie.

## YouTube Tutoriály

<div style="display: flex; justify-content: center; align-items: center;">
    <a href="https://youtu.be/43ZCeBTcsS8">
        <img src="https://img.youtube.com/vi/43ZCeBTcsS8/0.jpg" alt="Tutorial 2" style="width: 24%; height: auto;">
    </a>
    <a href="https://youtu.be/kFC-OWw7G8k">
        <img src="https://img.youtube.com/vi/kFC-OWw7G8k/0.jpg" alt="Tutorial 1" style="width: 24%; height: auto;">
    </a>
    <a href="https://youtu.be/kV2U7ttqE-g">
        <img src="https://img.youtube.com/vi/kV2U7ttqE-g/0.jpg" alt="Tutorial 3" style="width: 24%; height: auto;">
    </a>
    <a href="https://youtu.be/3_aNVu6EU3Y">
        <img src="https://img.youtube.com/vi/3_aNVu6EU3Y/0.jpg" alt="Tutorial 4" style="width: 24%; height: auto;">
    </a>
</div>


## Použité technologie

- **Next.js**: Rámec React pro vytváření serverově renderovaných a statických webových aplikací.
- **Tailwind CSS**: Utility-first CSS framework pro rychlé vytváření vlastních uživatelských rozhraní.
- **Vercel AI SDK**: Vercel AI SDK je knihovna pro vytváření AI-powered streaming textových a chatových UI.
- **Groq & Mixtral**: Technologie pro zpracování a porozumění dotazů uživatele.
- **Langchain.JS**: JavaScriptová knihovna zaměřená na textové operace, jako je rozdělení textu a vnoření.
- **Brave Search**: Soukromý vyhledávač používaný pro získávání relevantního obsahu a obrázků.
- **Serper API**: Používá se pro získávání relevantních video a obrázkových výsledků na základě dotazu uživatele.
- **OpenAI Embeddings**: Používá se pro vytváření vektorových reprezentací textových částí.
- **Cheerio**: Využívá se pro HTML parsování, což umožňuje extrakci obsahu z webových stránek.
- **Ollama (Volitelné)**: Používá se pro streaming inference a embeddings.
- **Upstash Redis Rate Limiting (Volitelné)**: Používá se pro nastavení rate limiting pro aplikaci.
- **Upstash Semantic Cache (Volitelné)**: Používá se pro ukládání dat pro rychlejší reakční časy.

## Začínáme

### Předpoklady 

- Získání API klíčů od OpenAI, Groq, Brave Search a Serper.

#### Předpoklady pro instalaci bez Dockeru

- Ujistěte se, že na vašem počítači je nainstalován Node.js a npm.

#### Předpoklady pro instalaci s Dockerem

- Ujistěte se, že na vašem počítači je nainstalován Docker a docker compose.

### Získání API klíčů

- **OpenAI API Key**: [Vygenerujte si svůj OpenAI API klíč zde](https://platform.openai.com/account/api-keys).
- **Groq API Key**: [Získejte si svůj Groq API klíč zde](https://console.groq.com/keys).
- **Brave Search API Key**: [Získejte si svůj Brave Search API klíč zde](https://brave.com/search/api/).
- **Serper API Key**: [Získejte si svůj Serper API klíč zde](https://serper.dev/).

### Rychlý klon a nasazení

Jednoduché, snadné, rychlé a zdarma - nasadit na vercel

> Ujistěte se, že vyplníte všechny API klíče potřebné pro instalaci.

[![Nasazeno s Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdevelopersdigest%2Fllm-answer-engine&env=OPENAI_API_KEY,GROQ_API_KEY,BRAVE_SEARCH_API_KEY,SERPER_API&envDescription=VŠECHNY%20API%20KLÍČE%20jsou%20potřebné%20pro%20tuto%20aplikaci.%20Pokud%20nepoužíváte%20OpenAI%20KLÍČ%20a%20používáte%20namísto toho%20Groq,%20pak%20do%20sekce%20OpenAI%20Key%20zadejte%20jen%20náhodný%20řetězec,%20aby%20se%20při%20budování%20projektu%20nevygenerovala%20žádná%20chyba.&project-name=llm-answer-engine&repository-name=llm-answer-engine&skippable-integrations=1)



### Instalace

1. Klonování repozitáře:
    ```
    git clone https://github.com/developersdigest/llm-answer-engine.git
    ```
2. Přesunutí do adresáře
    ```
    cd llm-answer-engine
    ```

#### Instalace s Dockerem

3. Upravte soubor `docker-compose.yml` a přidejte své API klíče

4. Spuštění serveru

Pro spuštění serveru proveďte:
```
docker compose up -d #pro v2
```
nebo
```
docker-compose up -d #pro v1
```
server bude poslouchat na zadaném portu.

#### Instalace bez Dockeru

3. Nainstalujte potřebné závislosti:
    ```
    npm install
    ```
    nebo
    ```
    bun install
    ```
4. Vytvořte soubor `.env` v kořenovém adresáři vašeho projektu a přidejte své API klíče:
    ```
    OPENAI_API_KEY=your_openai_api_key
    GROQ_API_KEY=your_groq_api_key
    BRAVE_SEARCH_API_KEY=your_brave_search_api_key
    SERPER_API=your_serper_api_key
    ```
5. Spuštění serveru

Pro spuštění serveru proveďte:
```
npm run dev
```
nebo
```
bun run dev
```

server bude poslouchat na zadaném portu.

## Úprava konfigurace

Konfigurační soubor se nachází v souboru `app/config.tsx`. Můžete upravit následující hodnoty

- useOllamaInference: false,
- useOllamaEmbeddings: false,
- inferenceModel: 'mixtral-8x7b-32768', 
- inferenceAPIKey: process.env.GROQ_API_KEY, 
- embeddingsModel: 'text-embedding-3-small', 
- textChunkSize: 800, 
- textChunkOverlap: 200, 
- numberOfSimilarityResults: 2,
- numberOfPagesToScan: 10, 
- nonOllamaBaseURL: 'https://api.groq.com/openai/v1'
- useFunctionCalling: true
- useRateLimiting: false
- useSemanticCache: false
- usePortkey: false

### Podpora volání funkcí (Beta)
V současné době je podpora volání funkcí podporována s následujícími schopnostmi:

- Mapy a Lokace (Serper Locations API)
- Nakupování (Serper Shopping API)
- TradingView Stock Data (Free Widget)
- Spotify (Free API)
- Jakoukoli funkcionalitu, kterou byste chtěli vidět zde, otevřete prosím problém nebo zašlete PR.
- Pro povolení volání funkcí a podmíněného streamování UI (v současné době v beta verzi), ujistěte se, že je v konfiguračním souboru nastaveno useFunctionCalling na true.

### Podpora Ollama (Částečně podporováno)
V současné době jsou podporovány streaming textové odpovědi pro Ollama, ale následné otázky zatím nejsou podporovány.

Embeddings jsou podporovány, ale čas na první token může být docela dlouhý, když se používá jak lokální embedding model, tak lokální model pro streaming inference. Doporučuji snížit některé hodnoty RAG specifikované v souboru `app/config.tsx` pro snížení času na první token při použití Ollama.

Pro začátek se ujistěte, že máte běžící model Ollama na svém lokálním počítači a nastavte v konfiguraci model, který chcete použít, a nastavte use OllamaInference a/nebo useOllamaEmbeddings na true.

Poznámka: Když je 'useOllamaInference' nastaveno na true, bude model použit jak pro generování textu, ale při použití Ollama bude přeskočen krok inference následných otázek.

Více informací: https://ollama.com/blog/openai-compatibility

### Roadmap

- [] Přidat nahrávání dokumentů + RAG pro vyhledávání/získávání dokumentů
- [] Přidat komponentu nastavení, která umožní uživatelům vybrat model, model vnoření a další parametry z UI
- [] Přidat podporu pro následné otázky při použití Ollama
- [Dokončeno] Přidat podporu difuzních modelů (Fal.AI SD3 na začátek), přístupných prostřednictvím '@ mention'
- [Dokončeno] Přidat AI Gateway pro podporu více modelů a vnoření. (OpenAI, Azure OpenAI, Anyscale, Google Gemini & Palm, Anthropic, Cohere, Together AI, Perplexity, Mistral, Nomic, AI21, Stability AI, DeepInfra, Ollama, atd)
```https://github.com/Portkey-AI/gateway```
- [Dokončeno] Přidat podporu pro sémantické ukládání ke zlepšení reakčních časů
- [Dokončeno] Přidat podporu pro dynamické a podmíněně renderované UI komponenty na základě dotazu uživatele

![Příklad](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN284d3p5azAyNHpubm9mb2F0cnB6MWdtcTdnd2Nkb2d1ZnRtMG0yYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OMpt8ZbBsjphZz6mue/giphy.gif)

- [Dokončeno] Přidat podporu pro dark mode podle uživatelovy systémové preference

### Backend + Node Only Express API

[Sledujte express tutoriál zde](https://youtu.be/43ZCeBTcsS8) pro podrobný průvodce nastavením a spuštěním tohoto projektu.
Kromě Next.JS verze projektu je zde také verze pouze s backendem, která používá Node.js a Express. Ta se nachází v adresáři 'express-api'. Toto je samostatná verze projektu, kterou lze použít jako referenci pro vytváření podobného API. V adresáři 'express-api' je také readme soubor, který vysvětluje, jak spustit backendovou verzi.

### Upstash Redis Rate Limiting
[Sledujte Upstash Redis Rate Limiting tutoriál zde](https://youtu.be/3_aNVu6EU3Y) pro podrobný průvodce nastavením a spuštěním tohoto projektu.
Upstash Redis Rate Limiting je bezplatná služba, která vám umožňuje nastavit rate limiting pro vaši aplikaci. Poskytuje jednoduché a snadno použitelné rozhraní pro konfiguraci a správu rate limitů. S Upstash můžete snadno nastavit limity na počet požadavků na uživatele, IP adresu nebo jiná kritéria. To může pomoci zabránit zneužití a zajistit, že vaše aplikace nebude přetížena požadavky.

## Přispívání

Příspěvky do projektu jsou vítány. Nebojte se forkovat repozitář, provést své změny a odeslat pull request. Můžete také otevřít problémy, abyste navrhli vylepšení nebo nahlásili chyby.


## Licence

Tento projekt je licencován pod licencí MIT.

[![Star History Chart](https://api.star-history.com/svg?repos=developersdigest/llm-answer-engine&type=Date)](https://star-history.com/#developersdigest/llm-answer-engine&Date)

I'm the developer behind Developers Digest. If you find my work helpful or enjoy what I do, consider supporting me. Here are a few ways you can do that:

- **Patreon**: Support me on Patreon at [patreon.com/DevelopersDigest](https://www.patreon.com/DevelopersDigest)
- **Buy Me A Coffee**: You can buy me a coffee at [buymeacoffee.com/developersdigest](https://www.buymeacoffee.com/developersdigest)
- **Website**: Check out my website at [developersdigest.tech](https://developersdigest.tech)
- **Github**: Follow me on GitHub at [github.com/developersdigest](https://github.com/developersdigest)
- **Twitter**: Follow me on Twitter at [twitter.com/dev__digest](https://twitter.com/dev__digest)
