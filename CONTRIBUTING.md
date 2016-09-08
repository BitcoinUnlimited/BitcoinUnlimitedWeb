# Contributing to the BU Website

Anyone is welcome to contributes towards the development of the [Bitcoin Unlimited website](https://www.bitcoinunlimited.info/). This document contains useful information to guide you in making contributions to the project.

## Contributor Workflow

This codebase is maintained using a contributor workflow where everyone, without exception, contributes patches using [pull requests](https://help.github.com/articles/about-pull-requests/) (PRs). This facilitates social contribution, easy testing, and peer review.

To contribute a patch, the workflow is as follows:

* [Fork the repository](https://help.github.com/articles/fork-a-repo/)
* [Create a topic branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)
* [Commit patches](https://help.github.com/articles/adding-a-file-to-a-repository-from-the-command-line/)
* [Create a pull request](https://help.github.com/articles/about-pull-requests/)

In general, [commits should be atomic](https://en.wikipedia.org/wiki/Atomic_commit#Atomic_commit_convention) and diffs should be easy to read. For this reason, please refrain from mixing formatting fixes or code moves with actual code changes.

If a particular commit references another issue, please add the reference, for example `fixes #123` or `closes #321`, in the commit message. Using the `fixes` or `closes` keywords will cause the corresponding issue to be closed when the pull request is merged.

Please refer to the [Git manual](https://git-scm.com/doc) for more information about Git.

If a pull request is specifically not to be considered for merging (yet), please prefix the title with `[WIP]` or use [Task Lists](https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments) in the body of the pull request to indicate that it is a work in progress.

The body of the pull request should contain enough description about what the patch does and a justification/reasoning for the patch. Please include references to any discussions relating to the pull request.

One should expect comments and review from other contributors. You can add more commits to your pull request by committing them locally and pushing to your own fork until you have satisfied all feedback. If your pull request is accepted for merging, you may be asked by a maintainer to squash and/or rebase your commits before it will be merged. The length of time required for peer review is unpredictable and will vary from patch to patch.

## Pull Request Philosophy

Patch sets should always be focused. For example, a pull request could add a feature, fix a bug, or refactor code; but not a mixture. Please avoid super pull requests which attempt to do too much, are overly large, or are overly complex. This makes peer review difficult.

### features

When adding a new feature, thought must be given to the long term technical debt and maintenance that feature may require after inclusion. Before proposing a new feature that will require maintenance, please consider if you are willing to maintain it (including bug fixing). If features get orphaned with no maintainer in the future, they may be removed by the maintainers.

### Refactoring

Refactoring is a necessary part of any software project's evolution. The following guidelines cover refactoring pull requests for the project.

There are three categories of refactoring: code only moves, code style fixes, and code refactoring. In general, refactoring pull requests should not mix these three kinds of activity in order to make refactoring pull requests easy to review. In all cases, refactoring pull requests must not change the behavior of code within the pull request (even bugs must be preserved as they are).

## Peer Review

Anyone may contribute by participating in peer review, which is expressed by comments in the pull request. Typically, reviewers will review the code for obvious errors, test out the patch set, and open on the technical merits of the patch. Project maintainers take into account the peer review when determining if there is consensus to merge a pull request. The following language is used within pull request comments:

* `ACK` means "I have tested the code and I agree it should be merged"
* `NACK` means "I disagree this should be merged" and must be accompanied by sound justification
* `utACK` means "I have not tested the code, but I have reviewed it and it looks OK, I agree it can be merged"
* `Concept ACK` means "I agree in the general principle of this pull request"
* `Nit` refers to trivial, often non-blocking issues

## Deployment Policy

The maintainers are responsible for the release and deployment of the Bitcoin Unlimited website.
