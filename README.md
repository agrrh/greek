# ![logo-64](assets/logo-64.png) Greek

## Info

Greek is an service catalog.

Is was created to cover [single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth) gap for core infrastructure / platform teams.

Think of it as [service catalog](https://en.wikipedia.org/wiki/Service_catalog), capable to enrich data using integrations with Business, CI/CD and engineering platforms.

## Design

```mermaid
graph TD
  actor[Actor]

  subgraph core
    ui[UI]
    api[REST API]
  end

  subgraph data
    db[(Database)]
    cache[(Cache)]
  end

  subgraph data-sources[Data Sources]
    url[(URL)]
    github[(GitHub)]
    kubernetes[(k8s CRDs)]
  end

  subgraph collectors[Collectors]
    raw
    git
    kube
  end

  url -.-|query| raw
  github -.-|query| git
  kubernetes -.-|query| kube

  subgraph services[Services Resources]
    svc-foo[Service Foo]
    svc-bar-image[docker/svc/bar]
  end

  subgraph agents[Agents]
    status[Status]
    vulners[Vulners]
  end

  svc-foo -.-|query| status
  svc-bar-image -.-|query| vulners

  actor --> ui
  ui --> api

  api --> db
  api --> cache

  raw --> api
  git --> api
  kube --> api

  status --> api
  vulners --> api
```

- **Collectors** - these are watchers, they keep service specs synchronized from desired data source

- **Agents** - proxy processes to gather data from third-party systems (e.g. metrics, logs, security scanners, ...) and thus provide additional data for UI dashboards

## Roadmap

Moved to [Trello board](https://trello.com/b/Xww1m2DX) [RU].

## Naming

Once an engineer asked for service catalog to be able to make company's culture better.

It was quite a reference to famous Archimedes quote:

>Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.

Well, he was a Greek.
