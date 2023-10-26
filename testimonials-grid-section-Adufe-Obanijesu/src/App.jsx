import Card from "./components/Card";

function App() {
  return (
    <main className="w-full flex items-center justify-center bg-green-50 px-6 md:px-0 py-12 md:py-0">
      <div className="md:w-5/6 md:py-12">
        <div className="grid grid-cols-4 gap-4">
          <div className="lg:col-span-3 col-span-4 grid grid-cols-6 gap-4">
            <div className="lg:col-span-4 col-span-6">
              <Card
                profilePic="image-daniel.jpg"
                name="Daniel Clifford"
                heading="I received a job offer mid-course, and the subjects I learned were curret, if not more so, in the company I joined. I honestly feel I got every penny's worth."
                content="I was an EMT for may years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free inro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfull switched careers, working as a Software Engineer at a VR startup."
                bg="bg-purple-600"
                contrast="dark"
                quote
              />
            </div>
            <div className="lg:col-span-2 md:col-span-3 col-span-6">
              <Card
                profilePic="image-jonathan.jpg"
                name="Jonathan Walters"
                heading="The team was very supportive and kept me motivated"
                content="I started as as total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself."
                bg="bg-slate-600"
                contrast="dark"
              />
            </div>
            <div className="lg:col-span-2 md:col-span-3 col-span-6">
              <Card
                profilePic="image-jeanette.jpg"
                name="Jeanette Harmon"
                heading="An overall wonderful and rewarding experience"
                content="Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
                bg="bg-white"
                contrast="light"
              />
            </div>
            <div className="lg:col-span-4 col-span-6">
              <Card
                profilePic="image-patrick.jpg"
                name="Patrick Abrams"
                heading="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
                content="The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."
                bg="bg-slate-800"
                contrast="dark"
              />
            </div>
          </div>

          <div className="lg:col-span-1 col-span-4">
            <Card
              profilePic="image-kira.jpg"
              name="Kira Whittle"
              heading="Such a life-changing experience. Highly recommended!"
              content="Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about th program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait log for assistance. The agile tea project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommended!"
              bg="bg-white"
              contrast="light"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
