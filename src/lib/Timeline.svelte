<script>

 import { onMount } from 'svelte';

 export let data = [];
 let filter;
 let year;
 let reversed = false;
 let darkmode = false;

 $: sortedData = reversed 
									? data.sort((a,b) => b.created_at - a.created_at)
									: data.sort((a,b) => a.created_at - b.created_at);

 $: filteredData = sortedData.filter((item) => {
		 if(filter === 'all') {
				 return true;
		 } else {
				return filter  ? item.tags.includes(filter) : true; 
		 }
 })

 $: timelineData = filteredData.filter((item) => {
		 if(year === 'all') {
				 return true;
		 } else {
				return year  ? item.created_at.getFullYear() === year : true; 
		 }
 })


 const months = [
		 'January',
		 'February',
		 'March',
		 'April',
		 'May',
		 'June',
		 'July',
		 'August',
		 'September',
		 'October',
		 'November',
		 'December'
 ];


 const tags = [
		 'articles',
		 'css-in-js',
     'browsers',
		 'frameworks',
		 'methodology',
		 'preprocessors',
		 'react',
		 'resets',
		 'standards',
		 'tools',
		 'websites',
 ]

 const beginning = 1990;
 const years = [];
 for(let i = 0; i< 40;i++) {
		 years.push(beginning + i);
 }

 function toggleDarkMode() {
		 document.body.classList.toggle('dark');
 }

 onMount(() => {
		 if (
				 localStorage.cssTimeLineTheme === 'dark' ||
				 (!('cssTimeLineTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		 ) {
				 darkmode = true;
				 document.body.classList.add('dark');
		 }

 })
 
</script>

<div class="options-wrapper">
		<h1>CSS Timeline</h1>
		<div>
				<label>
						<input type="checkbox"  bind:checked={reversed}  />
						Reverse Timeline
				</label>
		</div>
		<div>
				<label>Filter by tags:</label>
				<select  bind:value={filter}> 
						<option value="all">--Select a tag--</option>
						{#each tags as tag}
								<option value={tag}>{tag}</option>
						{/each}
				</select>
		</div>
		<div class="date-filter">
				<label>Filter by year:</label>
				<select  bind:value={year}> 
						<option value="all">--Select a year--</option>
						{#each years as year}
								<option value={year}>{year}</option>
						{/each}
				</select>
		</div>
		<div>
				<label>
						<input type="checkbox"  bind:checked={darkmode}  on:change={toggleDarkMode} />
						Dark Mode
				</label>
		</div>

		<div>
				<a class="header-link" href="https://github.com/the-web-history/css-timeline" target="_blank">Github</a>
		</div>
</div>
<ul class="timeline">
    {#each timelineData as repo, index}
				<li>
						<div class="{index % 2 == 0 ? 'direction-r' : 'direction-l'}">
								<div class="flag-wrapper">
										<span class="flag"><a target="_blank" href="{repo.url}">{repo.name}</a></span>
										<span class="time-wrapper"><span class="time">{ repo.created_at.getFullYear()}, {months[repo.created_at.getMonth()]}</span></span>
								</div>
								<div class="desc">
										<p>{repo.description}</p>
										{#if repo.links && repo.links.length > 0}
												{#each repo.links as link}
														<a href={link.url}>{link.name}</a>,&nbsp; 
												{/each}
										{/if}

								</div>
				    </div>
				</li>
    {/each}

</ul>
<style>
  /* ================ The Timeline ================ */

  .timeline {
    position: relative;
    width: 1160px;
    margin: 0 auto;
    margin-top: 60px;
    padding: 1em 0;
    list-style-type: none;
  }

 .timeline:before {
     position: absolute;
     left: 50%;
     top: 0;
     content: ' ';
     display: block;
     width: 6px;
     height: 100%;
     margin-left: -3px;
		 background: linear-gradient(to bottom, rgba(51, 65, 85, 0) 0%, var(--slate-700) 8%, var(--slate-700) 92%, rgba(51, 65, 85, 0) 100%);

     z-index: 5;
 }

 :global(body.dark) .timeline {
   background: var(--slate-900);
 }
 
  .timeline li {
    padding: 1em 0;
  }

  .timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .direction-l {
    position: relative;
    width: 550px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 550px;
    float: right;
    text-align: left;
  }

  .flag-wrapper {
    position: relative;
    display: inline-block;

    text-align: center;
  }

  .flag {
    position: relative;
    display: inline;
    background: rgb(248,248,248);
    padding: 6px 10px;
    border-radius: 5px;

    font-weight: 600;
    text-align: left;
  }

 :global(body.dark) .flag {
   background: var(--slate-700);
 }

  .flag a {
    color: inherit;
    text-decoration: none;
  }

  .flag a:hover {
    color: rgb(255, 80,80);
  }

  .direction-l .flag {
    box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  }

  .direction-r .flag {
    box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  }

  .direction-l .flag:before,
  .direction-r .flag:before {
    position: absolute;
    top: 50%;
    right: -40px;
    content: ' ';
    display: block;
    width: 12px;
    height: 12px;
    margin-top: -10px;
    background: #fff;
    border-radius: 10px;
    border: 4px solid rgb(255,80,80);
    z-index: 10;
  }

  .direction-r .flag:before {
    left: -40px;
  }

  .direction-l .flag:after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    height: 0;
    width: 0;
    margin-top: -8px;
    border: solid transparent;
    border-left-color: rgb(248,248,248);
    border-width: 8px;
    pointer-events: none;
  }

  .direction-r .flag:after {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    height: 0;
    width: 0;
    margin-top: -8px;
    border: solid transparent;
    border-right-color: rgb(248,248,248);
    border-width: 8px;
    pointer-events: none;
  }

 :global(body.dark) .direction-l .flag:after {
    border-left-color: var(--slate-700);
 }

 :global(body.dark) .direction-r .flag:after {
   border-right-color: var(--slate-700);
 }

  .time-wrapper {
    display: inline;

    line-height: 1em;
    font-size: 0.66666em;
    color: rgb(250,80,80);
    vertical-align: middle;
  }

  .direction-l .time-wrapper {
    float: left;
  }

  .direction-r .time-wrapper {
    float: right;
  }

  .time {
    display: inline-block;
    padding: 4px 6px;
    background: rgb(248,248,248);
  }

 :global(body.dark) .time {
    background: rgb(250,80,80);
			color: var(--slate-100);
 }

  .desc {
    margin: 1em 0.75em 0 0;
			font-size: 0.77777em;
			font-style: italic;
			line-height: 1.5em;
  }

 :global(body.dark) .desc {
   color: var(--slate-300);
 }


  .direction-r .desc {
    margin: 1em 0 0 0.75em;
  }

  /* ================ Timeline Media Queries ================ */

  @media screen and (max-width: 660px) {

    .timeline {
      width: 100%;
      padding: 4em 0 1em 0;
    }

    .timeline li {
      padding: 2em 0;
    }

    .direction-l,
    .direction-r {
      float: none;
      width: 100%;

      text-align: center;
    }

    .flag-wrapper {
      text-align: center;
    }

    .flag {
				/* background: rgb(255,255,255); */
      z-index: 15;
    }

			:global(body.dark) .flag {
					background: var(--slate-700);
			}

    .direction-l .flag:before,
    .direction-r .flag:before {
      position: absolute;
      top: -30px;
      left: 50%;
      content: ' ';
      display: block;
      width: 12px;
      height: 12px;
      margin-left: -9px;
      background: #fff;
      border-radius: 10px;
      border: 4px solid rgb(255,80,80);
      z-index: 10;
    }

    .direction-l .flag:after,
    .direction-r .flag:after {
      content: "";
      position: absolute;
      left: 50%;
      top: -8px;
      height: 0;
      width: 0;
      margin-left: -8px;
      border: solid transparent;
				border-bottom-color: rgb(255,255,255);
				border-width: 8px;
      pointer-events: none;
    }

    .time-wrapper {
      display: block;
      position: relative;
      margin: 4px 0 0 0;
      z-index: 14;
    }

    .direction-l .time-wrapper {
      float: none;
    }

    .direction-r .time-wrapper {
      float: none;
    }

    .desc {
      position: relative;
      margin: 1em 0 0 0;
      padding: 1em;
				/* background: rgb(245,245,245); */
      -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
      -moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
      box-shadow: 0 0 1px rgba(0,0,0,0.20);

      z-index: 15;
    }

 
    .direction-l .desc,
    .direction-r .desc {
      position: relative;
      margin: 1em 1em 0 1em;
      padding: 1em;

      z-index: 15;
    }

  }

  @media screen and (min-width: 400px) and (max-width: 660px) {

    .direction-l .desc,
    .direction-r .desc {
      margin: 1em 4em 0 4em;
    }

			h1, .header-link { display: none;}



  }

 .options-wrapper {
		 display: flex;
		 justify-content: space-between;
		 items-align: center;
		 padding: .5em;
		 background: white;
		 position: fixed;
     width: 100%;
     z-index: 9999;
     margin: 0;
     top: 0;
 }


 :global(body.dark) .options-wrapper {
   background: var(--slate-800);
   color: var(--bg-color);
 }

 .date-filter {
		 padding:0 20px;
 }

 h1 {
		 font-size: 1em;
		 margin: 0;
 }

 .header-link {
		 text-decoration: none;
		 padding-right: 1em;
 }

 :global(body.dark) .header-link {
   color: var(--slate-200);
 }

 :global(body.dark) a {
		 color: var(--slate-200);
 }

</style>
