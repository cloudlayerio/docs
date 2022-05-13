---
sidebar_position: 3
slug: /jobs

title: Jobs
---

For more information on jobs, take a look at the [Jobs API Reference](/jobs).

## Jobs List

The jobs screen displays all the jobs that have been executed, it shows their status such as `pending`, `success` or `error` as well as the name of the job, and other details.

![Jobs Screen](/img/jobs.png)

### Project Filter

The project filter will show all the active projects that you can filter the results.

![Project Filter](/img/filter_project.png)

- `No Project` will always be present and will allow you to see jobs that have no project associated with them.

Added projects will show up as they are added. If a project has been shared with you, it will also show up in this list.

### Status Filter

The status filter shows all the [available statuses](/jobs#status) of a job that you can filter the results.

![Status Filter](/img/job_filter_status.png)

### Timestamp Filter

The timestamp filter shows common time durations including realtime that you filter the results.

![Status Timestamp](/img/filter_timestamp.png)

## Job List Row

![Job List Row](/img/jobs_list_row.png)

Each row in the Jobs List consists of several pieces of information about the job.

1. Job Title
2. Project, if not associated with project will show `No Project`.
3. The overall size of the generated content (this might not match asset size due to different ways storage is reported).
4. The job execution time.
5. The status of the job.
6. The timestamp the job was last updated.
7. Menu to perform more actions on the job row.
