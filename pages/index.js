import Head from 'next/head'

export default () => (
  <div className="home">
    <Head>
      <title>End of Transmission - kadira.io</title>
    </Head>
    <h1>End of Transmission - kadira.io</h1>
    <p>
      We started with a simple blog called “meteorhacks.com”. Then we did some experiments with Meteor and some of them became popular with the community.
    </p>
    <p>
      Then we launched kadira.io and we gave it to everyone in the Meteor community to analyze the performance of their apps in style. We grew our team and have tried to continue and grow like other startups.
    </p>
    <p>
      But there comes a point when you need to decide to stop. Unfortunately, we had to go that route.
    </p>
    <p>
      So, this is it.
    </p>
    <p>
      As of today, May 15th, 2017, we are officially shutting down kadira.io service.
    </p>

    <h2>Thanks MDG</h2>
    <p>
      MDG has always helped us in numerous ways. They were nice enough to <a href="https://blog.meteor.com/mdg-acquires-kadira-apm-96dfb3167fe5">acquire</a> most of the Kadira assets and run it <a href="https://blog.meteor.com/introducing-galaxy-professional-built-in-apm-5e063839a4aa">alongside Galaxy</a>. They also <a href="https://github.com/kadira-open/kadira-server">open-sourced</a> the codebase, allowing anyone to use it.
    </p>
    <p>
      Unfortunately, neither we nor MDG are able to maintain the open-sourced version of Kadira. But I hope that the community will fork and maintain it in the future.
    </p>
    <hr/>
    <div className="team">
      <div className="thanks">Thank you for helping us all these years</div>
      <div className="names">- Arunoda and the Team from Kadira.</div>
    </div>
    <div className="old-website">
      You can access our original website with: <a href="https://old.kadira.io">https://old.kadira.io</a>
    </div>
    <style jsx>{`
      .home {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-size: 15px;
        color: #333;

        max-width: 600px;
        padding: 50px;
      }

      p {
        line-height: 22px;
      }

      hr {
        border: 0;
        border-bottom: 1px solid #CCC;
        marign: 0;
        padding: 0;
      }

      .team .thanks {
        margin: 10px 0 5px 0;
      }

      .team .names {
        font-style: italic;
        font-size: 12px;
      }

      .old-website {
        margin: 50px 0;
        border: 1px solid #DDD;
        padding: 10px;
        font-size: 13px;
      }

      a {
        color: #1e88e5;
        text-decoration: none;
        border-bottom: 1px solid #1e88e5;
      }
    `}</style>
  </div>
)
