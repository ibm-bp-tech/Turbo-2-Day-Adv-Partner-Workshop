"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[1331],{1838:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return p}});var o=t(3366),s=(t(7294),t(4983)),n=t(4295),i=["components"],r={},l={_frontmatter:r},c=n.Z;function p(e){var a=e.components,t=(0,o.Z)(e,i);return(0,s.kt)(c,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",null,"4.1\tGet a global view of storage consumption"),(0,s.kt)("p",null,"There are three forms of cloud storage: object storage, file storage, and block storage. The bank’s cost optimization effort focuses on block storage, which functions like an external disk to the compute instance and provides low-latency state management for cloud workloads."),(0,s.kt)("p",null,"At a general level, there are two types of block storage: solid state drives (SSDs) and hard disk drives (HDDs). SSDs are good for low-latency, heavy IOPS types of workloads, whereas HDDs are good for high throughput sequential workloads."),(0,s.kt)("p",null,"It is important for the bank to choose a storage service based on the workload characteristics at hand. Some of the most common ways companies overspend on storage are:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Unused volumes: Compute instances are stopped, but the storage volumes are forgotten. This results in orphaned volumes, which then results in residual and accumulating costs."),(0,s.kt)("li",{parentName:"ol"},"Overprovisioning: Storage services are grossly oversized. For most cloud resources, you pay for what you provision, not for what you use."),(0,s.kt)("li",{parentName:"ol"},"Mismatched storage type: The storage choices are not appropriate for the requirements of the specific workload. For example, transaction processing is often best done on fast SSDs, whereas sequential workloads — like logging — are more compatible with cost-effective HDDs. This can result in either suboptimal performance or cost overruns.")),(0,s.kt)("p",null,"Let’s start exploring the storage optimization opportunities in this environment."),(0,s.kt)("h4",null,"Step 4.1.1"),(0,s.kt)("p",null,"Point out the Volume entity, as highlighted in the screenshot and narration below."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"529px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHElEQVQ4y32TaW/aQBCG/f9/TiWqtOmlqlFDmoaQD0kTE4oxBhsf6wtsfD3VLIW6SdMPo9XO8ezsO7tGVTU40S3frPeoPKHYbNlsNnieR5bllGWGMzllPB/RNA273e5obd2yTJd8mn3ASRzausNoO7hV97wVYJERq5g0TTXQ89bkWcyXyYBz65yuafew6g9wkdicTt9gx3NowIgWCybDIdZoxOrujrZtqaqKIAgIw5D12sd2HGzb1gfVda1hkqOUwlk4LJYLPNdDqQgjH4/wr4fMx1+ZDl4xn0xQSUKSJBqSZRlRFOliWQ9AWSUmBwu8LEvtNwrzgSa95Mx+R/hwQ7b28aNQJ8RxrHUTmOxlzfNcw2Tv+76G9c0oTZM8mfCobsjMH3SbDeXv67iuuwfFim2xH5b4RRaBbbfbvyTQHW7HV4Tfr1iPrlmeDIhclzhNdXez2QzHcchURlXsC8QvUJHkMPUDTHeYRhG+9ZNgbuFaM92VJEtnspqmycVsyDR8pK4aHe9r2YdpYN00NF1H3XW0oIMyXd1B3RDGASePr7lwzkmTFMuyjrA+6AjsP9RdWWqnFMjVBKwixYNtEiQBq+VKT/al7jTw4OwnHJ5FURRY1pxw7RP6AVGknun21Iw+vX/aHirFW+7tAZf2kObwU/5jxlMN+sFqV7GrSj5PPzJejbWm8u2e1jy78r/sePWq3k8+TvRe3p5I8ZL9AjV/LOFrI/SBAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/4dc7c26bf1cc4e96cd6efd301966be9d/e6b99/f-4.1.1.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/4dc7c26bf1cc4e96cd6efd301966be9d/7fc1e/f-4.1.1.png 288w","/Turbo-1-Day-Partner-Workshop/static/4dc7c26bf1cc4e96cd6efd301966be9d/e6b99/f-4.1.1.png 529w"],sizes:"(max-width: 529px) 100vw, 529px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("p",null,"By looking at the ‘Volume’ entity in the global supply chain, we see there are about 1,000 storage volumes in this environment. Notice the color coding in the donuts: “green” means healthy, “yellow” represents efficiency recommendations (i.e., cost savings), and “red” represents performance recommendations (i.e., impact to the end user experience). Based on the proportion of green vs. yellow vs. red, the bank can see there are significant opportunities to improve the cost efficiency and performance of storage."),(0,s.kt)("p",null,"Let’s drill down to better understand these cost reduction opportunities."),(0,s.kt)("h4",null,"Step 4.1.2"),(0,s.kt)("p",null,"Click the Volume entity, which will take you to the Storage Summary dashboard."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"529px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHElEQVQ4y32TaW/aQBCG/f9/TiWqtOmlqlFDmoaQD0kTE4oxBhsf6wtsfD3VLIW6SdMPo9XO8ezsO7tGVTU40S3frPeoPKHYbNlsNnieR5bllGWGMzllPB/RNA273e5obd2yTJd8mn3ASRzausNoO7hV97wVYJERq5g0TTXQ89bkWcyXyYBz65yuafew6g9wkdicTt9gx3NowIgWCybDIdZoxOrujrZtqaqKIAgIw5D12sd2HGzb1gfVda1hkqOUwlk4LJYLPNdDqQgjH4/wr4fMx1+ZDl4xn0xQSUKSJBqSZRlRFOliWQ9AWSUmBwu8LEvtNwrzgSa95Mx+R/hwQ7b28aNQJ8RxrHUTmOxlzfNcw2Tv+76G9c0oTZM8mfCobsjMH3SbDeXv67iuuwfFim2xH5b4RRaBbbfbvyTQHW7HV4Tfr1iPrlmeDIhclzhNdXez2QzHcchURlXsC8QvUJHkMPUDTHeYRhG+9ZNgbuFaM92VJEtnspqmycVsyDR8pK4aHe9r2YdpYN00NF1H3XW0oIMyXd1B3RDGASePr7lwzkmTFMuyjrA+6AjsP9RdWWqnFMjVBKwixYNtEiQBq+VKT/al7jTw4OwnHJ5FURRY1pxw7RP6AVGknun21Iw+vX/aHirFW+7tAZf2kObwU/5jxlMN+sFqV7GrSj5PPzJejbWm8u2e1jy78r/sePWq3k8+TvRe3p5I8ZL9AjV/LOFrI/SBAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/4dc7c26bf1cc4e96cd6efd301966be9d/e6b99/f-4.1.2.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/4dc7c26bf1cc4e96cd6efd301966be9d/7fc1e/f-4.1.2.png 288w","/Turbo-1-Day-Partner-Workshop/static/4dc7c26bf1cc4e96cd6efd301966be9d/e6b99/f-4.1.2.png 529w"],sizes:"(max-width: 529px) 100vw, 529px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("h4",null,"Step 4.1.3"),(0,s.kt)("p",null,"Point out the details on the Storage Summary dashboard, as highlighted in the screenshot and narration below."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7ElEQVQoz12Sy2/TQBDG/Rdz4sKFUzmgND1UCA6VEAiJl9qC1EuFOHBCiAMVqBD3oTZNnI3t+pU4u1577f0hO6EK+aTR7Hy7M/vtzDpZljHxPMR4hD+dYoyhhb25gguXddjBKQiPTVhrO5/nOc4smzGaCIQsiGZz0jimbHefP8XuPkYb01k1y7AP7lEf7VMAhZRIpe6KtWjFOAutKEYX8HYPwhGq1kThBB35UFXE4S3CDynFFBYLTFEQ+T6zOMKUeqlwTaWTzkqmf0Li+w8Jv/wkSMAfa4LEkDQlSSmpjSRuCoZ1gWwaPFkwXmiCXBPnCpoG6npZ8Pqi5P1LyeF+xeGbBR9ezzl4Mefoc8RxdMnX7Ia6Fhzf/mJr+B03y9m7mvLk1OPVtys+/TjvCjWAUgpnqbkmTQLCYEwUCbIsJE1CEj9AFoowSQg9QSJ85lmK1RqjZJfXpbu/sUcHKClxSlOzqCrmWqMb2/Wjva1e9casYrvGrU+33ePjO3i20xI4+ckJN1uPGPV6eL1tRL/PZLuP6O+sbLme9HqI3V2aIMCmGTZJlpYuFf8bjNNISXF5SXp2RjQYkJ6fE7su8voaORxyOxgQuW7Htd4o1Q3AGoOtKmzT/PcnnTv5G89Z5zfj9bONtYRBQBzHVFXFX9tf7hpvlj8bAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/dbf97f69fc59383b19346e31e30bf974/acfc1/f-4.1.3.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/dbf97f69fc59383b19346e31e30bf974/7fc1e/f-4.1.3.png 288w","/Turbo-1-Day-Partner-Workshop/static/dbf97f69fc59383b19346e31e30bf974/a5df1/f-4.1.3.png 576w","/Turbo-1-Day-Partner-Workshop/static/dbf97f69fc59383b19346e31e30bf974/acfc1/f-4.1.3.png 800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("p",null,"The ‘Storage Summary’ dashboard shows the number of volumes (1), total monthly cost of these volumes (2), and potential monthly savings that can be realized (3). The ‘Unattached Storage’ bar (4) shows that close to 30% of storage is currently unattached."),(0,s.kt)("p",null,"Let’s take a deeper look at the specific volumes that can be reclaimed."),(0,s.kt)("h2",null,"4.2\tReclaim waste"),(0,s.kt)("h4",null,"Step 4.2.1"),(0,s.kt)("p",null,"On the Potential Savings dashboard, click SHOW ALL."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"801px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMklEQVQoz42Ry0rDQBSG83Y+iD6F+giudOFSxG6l6EKFIi4qVbTiJkWhF2xJMQ25NU2mMZnJJ0lIaa0Wf/gZmHPmm3PRXNfFMIzC5mQCikJZlqGyrDj/41yz2QwtDENs28ayLEI3oO+MefXGVKqSN4EqpWmKtnxxP33iYFhj++WCnXaduUxXoL9p+cNcmsrKHs3Y4nB4gh04EEv29AZHvcciFivJNBbMhSCKosJ5e0mSrEEXwPewz9lnndRPwQs5Nzrs6o0iFskvjMAi8Kf4vo/neTiOgxCiBCm1sLZMPx7VuLLvuDa7bDVPabvlLGWmkEoi5aqVlGsj0KptlpUILie37Os3tOzRArZphonr4Pa6+KMh0cegBBZQpeDHO6nUn9vNq8vTk0EPs9XEeesgnh/4BjRaZgqaRwxcAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/e02a67c3932bd03fd3670bad82a823fc/da70f/f-4.2.1.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/e02a67c3932bd03fd3670bad82a823fc/7fc1e/f-4.2.1.png 288w","/Turbo-1-Day-Partner-Workshop/static/e02a67c3932bd03fd3670bad82a823fc/a5df1/f-4.2.1.png 576w","/Turbo-1-Day-Partner-Workshop/static/e02a67c3932bd03fd3670bad82a823fc/da70f/f-4.2.1.png 801w"],sizes:"(max-width: 801px) 100vw, 801px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("h4",null,"Step 4.2.2"),(0,s.kt)("p",null,"Select the AZURE tab (1). Under the DELETE section of the left navigation bar, click Volumes (2)."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJUlEQVQoz4WRO27DMBBEdVS3gQPDhZQuF0vhJifI5wDOp4mtUPwul5TECZaxHHUhMOCC3H2cAZvu/g4ogDEGeZqQVA9+PNQzUSnlXy1L6ma/3yPGiGEYQDHi9HGE+nxDmnIVyl/zenANk/kQAnLOaNq2hdYaSikQEXwghMhIOWGcJszzXBtlTynVWkDT6o6ZK1Dmm67rEIigxCERjCPYwNA2wBpTm8W9wMZxvAIFVuYCzQaRI6yxv8Db7RbeOfTnM4JY54wQMwIxgvcV5L2vsCtoFdkmhzzm6lDU3Gw2eH99wfH5CcPhAVY7uJhhPdWPEmD9sEtsiboGarbglGCthfMOzW63QyTCd98jnL6gTYDxCdp66EvUJbIAF6eLFGtw4vqoJPkBIroVrovNRVIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/22f73b23cc043b9c84da44fb9f7942cc/3cbba/f-4.2.2.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/22f73b23cc043b9c84da44fb9f7942cc/7fc1e/f-4.2.2.png 288w","/Turbo-1-Day-Partner-Workshop/static/22f73b23cc043b9c84da44fb9f7942cc/a5df1/f-4.2.2.png 576w","/Turbo-1-Day-Partner-Workshop/static/22f73b23cc043b9c84da44fb9f7942cc/3cbba/f-4.2.2.png 1152w","/Turbo-1-Day-Partner-Workshop/static/22f73b23cc043b9c84da44fb9f7942cc/0b124/f-4.2.2.png 1728w","/Turbo-1-Day-Partner-Workshop/static/22f73b23cc043b9c84da44fb9f7942cc/5a557/f-4.2.2.png 2282w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("p",null,"The dashboard identifies the bank’s storage volumes that are unattached, including the number of days they have gone unused. On cloud, the lifecycles of the storage volumes are not intentionally associated with the lifecycles of the compute instances. Volumes that are unattached for many days are good candidates to reclaim and gain some savings. The data for each cloud provider appears on a separate tab. This dashboard displays the bank’s potential savings from Azure, assuming they take all the recommended actions."),(0,s.kt)("p",null,"Turbonomic eliminates the need to hop between various cloud provider consoles. For example, we could also conveniently analyze storage usage in AWS or GCP by simply clicking the appropriate tab."),(0,s.kt)("h4",null,"Step 4.2.3"),(0,s.kt)("p",null,"Select the AWS tab (1). Under the DELETE section of the left navigation bar, click Volumes (2)."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVQY042QzUoEQQyE5/2fyWVB1puIiqggXjysrjuzM91J9/Tf9CfT6OJFMFBUEkJRlc5aS1gqcrXFX25Yq5ZCrfXfKCVTlsKyLHRmGlHnGT72mGEg5Egu+W8Bfs80kevnHbuHDfPs6d6eHnnfXiD3t4QKOcZ2tIIKdanknJvzlWOM367Kea9eUSeEOdCp98jrC/u7G47O0U8TvTEYmXDBY51wOB4Qr7jgsM4SUuAoPb0OrT+Z8YzOqeJjwsyBz5NhMIJ1nhhD+0tMkXEcm7N1Tjk1h5M32CAtiahirEVE6FSVVVREGa1jEo+bwzlOSgljTIu41g9LUFz0rffe49Q1/gI+C9DlVe3E/AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/e492efe1bcc8908356cda7cb18cf33d3/3cbba/f-4.2.3.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/e492efe1bcc8908356cda7cb18cf33d3/7fc1e/f-4.2.3.png 288w","/Turbo-1-Day-Partner-Workshop/static/e492efe1bcc8908356cda7cb18cf33d3/a5df1/f-4.2.3.png 576w","/Turbo-1-Day-Partner-Workshop/static/e492efe1bcc8908356cda7cb18cf33d3/3cbba/f-4.2.3.png 1152w","/Turbo-1-Day-Partner-Workshop/static/e492efe1bcc8908356cda7cb18cf33d3/0b124/f-4.2.3.png 1728w","/Turbo-1-Day-Partner-Workshop/static/e492efe1bcc8908356cda7cb18cf33d3/84415/f-4.2.3.png 1995w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("p",null,"Just by switching tabs, the bank can now see the potential savings from AWS storage, assuming they take all the recommended actions."),(0,s.kt)("h4",null,"Step 4.2.4"),(0,s.kt)("p",null,"On the AWS tab, select the first row which has a volume unattached for 14 days (1), and click the corresponding DETAILS button (2)."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABD0lEQVQY05VQy07EMAzs/38FN/6AM1ck3gekLmiPLFS7TRvHSZzYGdT0wgkJS5atsT3WzEBEEBHkKtCqaK39O1WrmSlMdRyIAgIRVloRAu/EthNbsz+JtuAUcPt8Y6/HBxgwDtM0YQ4MzgLJGbVWNGsws35galDV3hcpKKUADb1us22PmCwyIR8/xiHkDH55xOfLE+aUMDkHRx4rLUglwXmH6TIhSgSlAIrU8dP6hTV6cI6Yl9m+D284XV+NA4sg3N/h/H7AOSRcFg9OCVKkf48pwi0OVRVVK0otHT+HGbnuioi8ufkCzzwOm39RDT4JnGcsFJGlQGvtMlNK8N7vvv2ywsUFRXd7mNmYGTHG8QeaedB6FDHRrAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/9acad6d4f910bb873b37b334dd6f4437/3cbba/f-4.2.4.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/9acad6d4f910bb873b37b334dd6f4437/7fc1e/f-4.2.4.png 288w","/Turbo-1-Day-Partner-Workshop/static/9acad6d4f910bb873b37b334dd6f4437/a5df1/f-4.2.4.png 576w","/Turbo-1-Day-Partner-Workshop/static/9acad6d4f910bb873b37b334dd6f4437/3cbba/f-4.2.4.png 1152w","/Turbo-1-Day-Partner-Workshop/static/9acad6d4f910bb873b37b334dd6f4437/0b124/f-4.2.4.png 1728w","/Turbo-1-Day-Partner-Workshop/static/9acad6d4f910bb873b37b334dd6f4437/25a1a/f-4.2.4.png 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("h4",null,"Step 4.2.5"),(0,s.kt)("p",null,"Point out the details under ACTION ESSENTIALS on the Action Details panel, as highlighted in the screenshot and narration below."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgElEQVQ4y62SS2/VMBCF/f//AkvWrLpgy4IFbBFruICUS3OT+O3x+HWQnbZKbwtI0JGOorGdk88nI6z38CGgtIbScFBDApC7ckZKCa21R+pVa0WMcexHjhDz6Ssu37/BzLewlwV2WWAuF1ipEN/ewH7+BEWESPTEsKsbEhFyLeCSIPTP8/gCU4BRElpu8MYi+QB8eA8+fQF3mjuilDICRVBkRE4gTuCUH4iFPU9goxG2FfI8YTtPWOcJbr0Fo6H0U50Ge3UzqQ2YeaxdEwu5rrBKIXoPshZEDptZoINCzAQKYeSzV0MuFZzrPfCTEkprpJwRmcfPoczYSMNkB6o88umR3Jf3Hkqp8RxR8X6mlLITGmPgnRubkSI4J7joQTkilYRa6s52h2StxTzPWJYFIYTx3iPDvtibrtoqaingyMPo2qz97p7HKx9nCoeQr/uj6Z8k/mZ0TfbccD9L+FISx3bMxX9KPExsw8sQ3nx8E16/e0U/ppMz2rht25yU8p/1C3SVR8LVNfWYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/879cc1b8a392ac8ea070ff72e826392e/3cbba/f-4.2.5.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/879cc1b8a392ac8ea070ff72e826392e/7fc1e/f-4.2.5.png 288w","/Turbo-1-Day-Partner-Workshop/static/879cc1b8a392ac8ea070ff72e826392e/a5df1/f-4.2.5.png 576w","/Turbo-1-Day-Partner-Workshop/static/879cc1b8a392ac8ea070ff72e826392e/3cbba/f-4.2.5.png 1152w","/Turbo-1-Day-Partner-Workshop/static/879cc1b8a392ac8ea070ff72e826392e/8bb21/f-4.2.5.png 1663w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("p",null,"The Action Details panel provides the bank with supporting details behind the recommendation. Under the ‘Action Essentials’ section (1), it also shows whether the action can be taken immediately, whether downtime is required, and whether the action is manually reversible once taken."),(0,s.kt)("h4",null,"Step 4.2.6"),(0,s.kt)("p",null,"Click X to close the Action Details panel."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"290px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVQoz51SXUvDMBTt//8DPgh+gCiIHxPcgy8be9gK+rA9CLrOzlGptHWtNM3aJG1yNCkt3fBheOCQ5N7ck/sRSymFfaDvNWwgowCfZ8fweld4v7nE9/kJLO3gnKMsS0gpQSlFkiSGVVUZG2PMCOizBs0yvC6XEO4CxfQJCSEgQiC/vqgFsywzQTrA9324rgvHcYxNCAFCyJZgFIZ4GAzBFnPAecE6JaAKkP3bWnBf7LaH+x8ITw8R9++wvu8hOjqApUv6D6EUpFSI4wRfYYQoCJCkKSxlHLJ9fTew6+/uNzxHxihYxcAkb7NuS9aDWa1WmM1msG0bo9EIk8kEnudtlatQr8/BHMO3MQaLMR69KSijtWA3s6IojHCe52YgzVD++ja5KAx1ppRv6jb8Cv4AS0BnQwaGYc0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/133e0f3ec9d24890a9a327341cedc315/82197/f-4.2.6.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/133e0f3ec9d24890a9a327341cedc315/7fc1e/f-4.2.6.png 288w","/Turbo-1-Day-Partner-Workshop/static/133e0f3ec9d24890a9a327341cedc315/82197/f-4.2.6.png 290w"],sizes:"(max-width: 290px) 100vw, 290px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("p",null,"Now let’s examine the bank’s cost savings opportunities from moving volumes to alternate storage types that are a better fit for the workloads at hand."),(0,s.kt)("h2",null,"4.3\tSelect the right type of storage for the workloads"),(0,s.kt)("p",null,"The bank needs to choose the right storage volume for their workloads. Capacity and performance are two fundamental factors around which these choices should be made. We’ll see how even if wrong initial choices are made, the Turbonomic platform will detect these optimization and cost reduction opportunities using its continuous feedback loop."),(0,s.kt)("h4",null,"Step 4.3.1"),(0,s.kt)("p",null,"Under the SCALE category of the left navigation bar, select Volumes."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5klEQVQY002P22rEMAxE8//f1r53C33c0mSTOLYl+bbJKXYprGCwDTNH42m933HLQlxXSs7knCmt0M5Gn4uL/3m9v04pZej5fDJ9vb/xfftg/ryhEjEzaqvUWoehtTbUA/2UrMyyssjKLA9iFmqpqNkoM0XV8bCUEDXEMpb/wpYyPggppWFWVbZj4xE2nB48/MrPsWAlIVHw3jN1k4igIvio7F7RlLnOk5QrR5ABGwvMRvA6L1ptlFwJ24bsGyEE9n1n6rABVCWI4oJiqXAOYMH5OBr2L3dgb5FLHjJLOL+jGgfQOccvpbODJomomyMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/2d041f43760708532b9ed5a43f3ff06b/3cbba/f-4.3.1.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/2d041f43760708532b9ed5a43f3ff06b/7fc1e/f-4.3.1.png 288w","/Turbo-1-Day-Partner-Workshop/static/2d041f43760708532b9ed5a43f3ff06b/a5df1/f-4.3.1.png 576w","/Turbo-1-Day-Partner-Workshop/static/2d041f43760708532b9ed5a43f3ff06b/3cbba/f-4.3.1.png 1152w","/Turbo-1-Day-Partner-Workshop/static/2d041f43760708532b9ed5a43f3ff06b/0b124/f-4.3.1.png 1728w","/Turbo-1-Day-Partner-Workshop/static/2d041f43760708532b9ed5a43f3ff06b/79859/f-4.3.1.png 2002w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("p",null,"We can immediately see the various scale options, along with the bank’s projected savings."),(0,s.kt)("h4",null,"Step 4.3.2"),(0,s.kt)("p",null,"Click DETAILS on the first row."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA70lEQVQY022Q70rEMBDE+/4P5SdfQZQeFhTx7ky7aTZ/mrRNf3LpR10YhmWZ2WE67z0pJWqt7LU2rkflOI5/wcGfsc7wdR/IZaEzxjBNE6qKV2XJC9u+ncLjVDezepo9npV9pWyFvJV2H649zy9PiAqdiBBDYJSJcbZYr2g8IeowMmHVIk6QeeLj/snrrediBt5uF16/e1wOpBD5GXq6EAIpRtR7jHWYWUk5U9aCC5FRLEtOLbl6xVrLuq6sa2lViUyIuTa+vl/oYoycSFiNzD6xbTt134mpMDtPKaVhWZZWzcOw7Tnj3EyQkUcw5z2/Eg2BY3X+w+UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/60bff87eda06c2e963888bbb9701c934/3cbba/f-4.3.2.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/60bff87eda06c2e963888bbb9701c934/7fc1e/f-4.3.2.png 288w","/Turbo-1-Day-Partner-Workshop/static/60bff87eda06c2e963888bbb9701c934/a5df1/f-4.3.2.png 576w","/Turbo-1-Day-Partner-Workshop/static/60bff87eda06c2e963888bbb9701c934/3cbba/f-4.3.2.png 1152w","/Turbo-1-Day-Partner-Workshop/static/60bff87eda06c2e963888bbb9701c934/0b124/f-4.3.2.png 1728w","/Turbo-1-Day-Partner-Workshop/static/60bff87eda06c2e963888bbb9701c934/d49f4/f-4.3.2.png 2010w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("h4",null,"Step 4.3.3"),(0,s.kt)("p",null,"Point out the details on the Action Details panel, as highlighted in the screenshot and narration below."),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwElEQVQ4y51STW8TMRDd/3/jhDggLly4RRwq+AWIA4ciyoeoFIFQmyYlIeuv8YzHD40bb9IQVaiW3nq8Ozt+894Mzjn4EFBUoVohtYJFwMx7iODkevMaenEOApAzgXLGsFqtcH29wM3NEr99gP/0EenFU5AqiBlptUR++RxhcYUxBIzbLYyExfnbZ5TlAsQCKQwugiHGiBBCg48R6XYF/jGfSCgzcPULyY0YnWvFvPfwziGIoHNXVdRaMdjj1LL3BmvZMk5ntcS2iQhKKRhKUeQse9AO2XTUFldVSBGknO4h7pCY2llay9auDxApyJn3RXNubZhRtux2ogQWBmVq361IoNhiY9haNocT0dRmL2QrmylE6LJQNsfLlBtjwrFkQ96NRtNCtTHp+hm62F34fjaUg7hj6A67GCfHTDMc3dxZd3bHBk4MTcPIDFkugLMZKnMbVLWkA2Y2Ximlfxj1Yn0fgveIRODtH5QP76ExoF6co3p/Nyq7tk2WQ31PFW4tx5SUMimLaLA5dk5xNlNs1vaniXS3/yeG5ANyoGa7selDXB9g8RCG2btXl8/ePpnPf15+d6P7sl6vv24Mm82j8BeW50IwRMGlZwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbo-1-Day-Partner-Workshop/static/426ff08aeaa81a4943a682862802d38e/3cbba/f-4.3.3.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/426ff08aeaa81a4943a682862802d38e/7fc1e/f-4.3.3.png 288w","/Turbo-1-Day-Partner-Workshop/static/426ff08aeaa81a4943a682862802d38e/a5df1/f-4.3.3.png 576w","/Turbo-1-Day-Partner-Workshop/static/426ff08aeaa81a4943a682862802d38e/3cbba/f-4.3.3.png 1152w","/Turbo-1-Day-Partner-Workshop/static/426ff08aeaa81a4943a682862802d38e/7cda5/f-4.3.3.png 1666w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("p",null,"We can see that this particular volume is underutilized from both IOPS (1) and throughput (2) perspectives. Based on the actual utilization pattern of this workload, Turbonomic’s analytics show that this workload does not need an SSD and that the performance requirements of the workload can be met with a cheaper magnetic disk (3). This workload does not need the provisioned 5,000 IOPS and can get by with a much lower 500 IOPS (4). We therefore see that the storage capacity was overprovisioned by a factor of ten, at a cost that was 10x too high. Turbonomic’s analytics engine computes the projected cost savings (5)."),(0,s.kt)("h4",null,"Step 4.3.4\tClick X to close the Action Details panel."),(0,s.kt)("h4",null,"Step 4.3.5"),(0,s.kt)("p",null,"Click X to close the Potential Savings panel."),(0,s.kt)("p",null,"By analyzing and understanding the data access patterns of their workloads, the bank can make cost-efficient trade-offs about their storage choices, including the storage type, capacity, and IOPS."))}p.isMDXComponent=!0},4295:function(e,a,t){t.d(a,{Z:function(){return w}});var o=t(7294),s=t(8650),n=t.n(s),i=t(5444),r=t(9403),l=t(3321),c=t(5900),p=t.n(c),g=function(e){var a,t=e.title,s=e.theme,n=e.tabs,i=void 0===n?[]:n;return o.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(a={},a["PageHeader-module--with-tabs--vbQ-W"]=i.length,a["PageHeader-module--dark-mode--WCeH8"]="dark"===s,a))},o.createElement("div",{className:"bx--grid"},o.createElement("div",{className:"bx--row"},o.createElement("div",{className:"bx--col-lg-12"},o.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},d=function(e){var a=e.relativePagePath,t=e.repository,s=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,n=t||s,r=n.baseUrl,l=n.subDirectory,c=r+"/edit/"+n.branch+l+"/src/pages"+a;return r?o.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},o.createElement("div",{className:"bx--col"},o.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},b=t(4275),m=t(1721),A=function(e){function a(){return e.apply(this,arguments)||this}return(0,m.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,s=e.slug,r=s.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var a,t=n()(e,{lower:!0,strict:!0}),l=t===r,c=new RegExp(r+"/?(#.*)?$"),g=s.replace(c,t);return o.createElement("li",{key:e,className:p()((a={},a["PageTabs-module--selected-item--aBB0K"]=l,a),"PageTabs-module--list-item--024o6")},o.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+g},e))}));return o.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},o.createElement("div",{className:"bx--grid"},o.createElement("div",{className:"bx--row"},o.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},o.createElement("nav",{"aria-label":a},o.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},a}(o.Component),h=A,f=t(2881),u=t(6958),k=t(36),y=function(e){var a=e.date,t=new Date(a);return a?o.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},o.createElement(k.sg,null,o.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var a=e.pageContext,t=e.children,s=e.location,c=e.Title,p=a.frontmatter,m=void 0===p?{}:p,A=a.relativePagePath,k=a.titleType,w=m.tabs,v=m.title,T=m.theme,E=m.description,S=m.keywords,D=m.date,P=(0,u.Z)().interiorTheme,N=(0,i.useStaticQuery)("2456312558").site.pathPrefix,x=N?s.pathname.replace(N,""):s.pathname,W=w?x.split("/").filter(Boolean).slice(-1)[0]||n()(w[0],{lower:!0}):"",B=T||P;return o.createElement(l.Z,{tabs:w,homepage:!1,theme:B,pageTitle:v,pageDescription:E,pageKeywords:S,titleType:k},o.createElement(g,{title:c?o.createElement(c,null):v,label:"label",tabs:w,theme:B}),w&&o.createElement(h,{title:v,slug:x,tabs:w,currentTab:W}),o.createElement(f.Z,{padded:!0},t,o.createElement(d,{relativePagePath:A}),o.createElement(y,{date:D})),o.createElement(b.Z,{pageContext:a,location:s,slug:x,tabs:w,currentTab:W}),o.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-lab-4-finops-mdx-c4e6a2c5031422616fea.js.map