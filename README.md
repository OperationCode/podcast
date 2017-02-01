## First time pulling down code

```bash
$ git clone git@github.com:coderly/talking-code.git
$ bundle install
```

## Pulling down updates

```bash
$ git pull
$ bundle
```

## Running a development server locally

```bash
$ middleman server
```

# Podcast order.

The podcasts are organized by date. This is given on the podcast file name, for example:

``` 2015-04-21-episode-1-florian-motlik.markdown ```

The podcast are sorter in descending order, if two podcast have the same date and you want to specify and order for them you should add a date property to each podcast file and specify an hour like this:

```
---
name: "Ryan Singer"
company: "Basecamp"
title: "How to Build Meaningful Products"
date: 2015/04/21 15:04

.......
```

The podcast with the latest hour will appear first.