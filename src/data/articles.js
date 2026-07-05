/* The Mikora Journal — launch articles.
   Body content is structured blocks: p, h2, quote, list, ctaLink.
   Keeps styling centralised in BlogPost and articles easy to maintain. */

const articles = [
  {
    slug: 'what-is-operational-intelligence',
    title:
      'What is operational intelligence — and why your business needs a layer of it',
    category: 'Strategy',
    date: '4 July 2026',
    dateISO: '2026-07-04',
    readTime: '7 min read',
    excerpt:
      'Dashboards tell you what happened. An intelligence layer does something about it while it still matters.',
    body: [
      {
        type: 'p',
        text: 'Every few years the software industry produces a new term for an old problem. Operational intelligence is one of the better ones, because the problem it names is real and expensive: most businesses know a great deal about their leads and act on almost none of it in time.',
      },
      {
        type: 'p',
        text: 'You already have the raw material. Ad platforms know which campaign a lead came from. Your forms know what they asked for. Your CRM knows what happened to the last hundred enquiries like them. The information exists — it just sits in separate systems, arriving at different speeds, read by different people, and by the time anyone assembles the picture, the moment to use it has passed.',
      },
      { type: 'h2', text: 'A working definition' },
      {
        type: 'p',
        text: 'Operational intelligence is the connected layer that sits across your lead sources, your CRM, and your team — and does three things continuously: it scores every lead the moment it arrives, it routes that lead to the right person with the right context, and it keeps every system in sync so there is one version of the truth. The defining characteristic is that it acts on information while the information still matters.',
      },
      {
        type: 'p',
        text: 'That last clause is the whole point. A report about last month is history. A score attached to a lead thirty seconds after it arrives, with an alert already in the right inbox, is an operation.',
      },
      { type: 'h2', text: 'Dashboards report. An intelligence layer acts.' },
      {
        type: 'p',
        text: 'Most businesses respond to lead chaos by buying reporting. Dashboards multiply. Someone builds a weekly deck. And the reporting is usually accurate — it will tell you, with great precision, that forty leads went cold last month while nobody was looking.',
      },
      {
        type: 'quote',
        text: 'A dashboard tells you the lead went cold. An intelligence layer makes sure it never does.',
      },
      {
        type: 'p',
        text: 'The distinction is between answering "what happened last quarter" and answering "what should happen in the next five minutes" — and then making it happen. Business intelligence looks backwards and informs strategy. Operational intelligence looks at right now and executes: this lead is hot, this person should call, this record should update, this campaign should get more budget.',
      },
      { type: 'h2', text: 'The three functions that make up the layer' },
      {
        type: 'list',
        items: [
          'Scoring — every lead measured on fit and intent at the moment of arrival, producing a clear priority instead of a chronological list.',
          'Routing — the right person notified instantly, with the full profile and a recommended action attached, so the first call starts informed.',
          'Sync — every status change, note, and score flowing across your stack automatically, so the CRM reflects reality without anyone typing.',
        ],
      },
      {
        type: 'p',
        text: 'Each function is useful alone. Together they change the character of the operation. Scoring without alerts is a number nobody sees. Alerts without sync produce a CRM that drifts from the truth. The value is in the connection — which is why bolting three point solutions together rarely delivers it.',
      },
      { type: 'h2', text: 'The compounding effect of handling every lead well' },
      {
        type: 'p',
        text: 'The gains from any single lead are small. A faster first call here, a better-prioritised morning there. What makes an intelligence layer valuable is that it applies the same standard to every lead, every day, without fatigue or exception. The seventh enquiry on a Friday evening gets exactly the treatment the first one did on Monday morning.',
      },
      {
        type: 'p',
        text: 'Multiply a small per-lead improvement across hundreds of leads a month and twelve months a year, and the compounding is not subtle. Consistency beats heroics. Teams that rely on individual diligence have great weeks and terrible ones; teams with an operational layer have a floor under their performance that never drops.',
      },
      { type: 'h2', text: 'Where to start' },
      {
        type: 'p',
        text: 'Not with everything at once. Pick your highest-volume lead source and connect it. Score those leads with rules you can explain in a sentence. Alert your team when one scores hot. Sync the outcome back to your CRM. Run that loop for a month, tune the rules against what actually closed, and only then add the next source.',
      },
      {
        type: 'p',
        text: 'The businesses that get the most from operational intelligence treat it as plumbing, not a project. It runs underneath everything, it is measured by outcomes — speed to first touch, cost per hot lead, pipeline per pound — and once it is in place, nobody can quite remember how the old way was ever acceptable.',
      },
    ],
  },
  {
    slug: 'meta-leads-to-crm',
    title: 'From Meta lead ad to CRM record in under a minute',
    category: 'Pipeline Automation',
    date: '1 July 2026',
    dateISO: '2026-07-01',
    readTime: '8 min read',
    excerpt:
      'The lead ad is the easy part. What happens in the next sixty seconds decides whether you paid for a lead or a name in a spreadsheet.',
    body: [
      {
        type: 'p',
        text: 'Meta lead ads are very good at their job. The form pre-fills from the profile, the friction is minimal, and a genuinely interested practitioner can register interest in under ten seconds from a sofa. The problem has never been generating the lead. The problem is everything that happens next.',
      },
      { type: 'h2', text: 'What actually happens when someone submits a lead ad' },
      {
        type: 'p',
        text: 'The submission lands in Meta\u2019s lead storage, attached to the campaign and ad that produced it. And there, in a remarkable number of businesses, it sits. Someone downloads a CSV on Tuesday. Someone else pastes rows into the CRM on Wednesday. The lead who was ready to talk on Sunday evening gets a call four days later from a salesperson who knows nothing about them except a name and a number.',
      },
      {
        type: 'p',
        text: 'Native integrations improved this, but only partially. A connector that moves the raw submission into a CRM has done the transport, not the work. The lead arrives unscored, unrouted, and silent — one more row at the bottom of a list, indistinguishable from the tyre-kicker above it.',
      },
      { type: 'h2', text: 'Where pipelines actually break' },
      {
        type: 'list',
        items: [
          'Sync delay — leads batch across in hours or days instead of seconds, and the speed advantage of the channel is thrown away.',
          'Field mismatches — the platform sends full_name, your CRM wants first and last; the platform sends a label, your CRM wants a picklist value. Data arrives mangled or not at all.',
          'Silent failures — a token expires or a field changes, the connector stops, and nobody notices for three weeks because no error reaches a human.',
          'Duplicates — the same person enquires from an ad and then your website, and becomes two records with two histories and two owners.',
          'No scoring — every lead lands equal, so the team works the list top to bottom and the best lead of the week waits behind six browsers.',
          'No alert — the record exists, but knowing about it depends on someone opening the CRM at the right moment.',
        ],
      },
      {
        type: 'p',
        text: 'Any one of these quietly taxes the pipeline. Most businesses running lead ads have three or four of them at once, which is why the honest answer to "what happened to the leads from that campaign" is so often a shrug.',
      },
      { type: 'h2', text: 'Deduplication done right' },
      {
        type: 'p',
        text: 'Deduplication sounds like housekeeping, but it decides whether your reporting means anything. The anchor is the email address — matched case-insensitively, because naive systems will happily treat the same address with a capital letter as a brand-new person and split one buyer\u2019s history across two records.',
      },
      {
        type: 'p',
        text: 'Good matching goes further than the email alone: it checks identity signals, merges intelligently rather than overwriting, and preserves the source history. A lead who came in from a Meta ad in May and your website chat in June is one person with two touchpoints — and knowing both touchpoints is exactly the attribution your spend decisions depend on.',
      },
      { type: 'h2', text: 'What real-time sync looks like in practice' },
      {
        type: 'p',
        text: 'Here is the timeline a properly connected pipeline runs, every time, without anyone touching a keyboard:',
      },
      {
        type: 'list',
        items: [
          'Second 0 — the practitioner submits the lead ad form.',
          'Seconds later — the submission arrives in the intelligence layer over a webhook, with campaign and ad attribution attached.',
          'Within thirty seconds — fit and intent scoring runs, producing a blended score, a temperature, and a recommended action.',
          'Moments after — the CRM record is created or matched to an existing one, fully populated, correctly attributed, no duplicates.',
          'Under a minute — if the lead scored hot, the alert is already in the sales team\u2019s inbox with the complete profile.',
        ],
      },
      {
        type: 'p',
        text: 'From that point the sync runs in both directions. When sales updates the status or adds a note, the change flows back through the layer to every connected system. The CRM stops being a place where reality is manually transcribed and becomes a place where reality simply appears.',
      },
      { type: 'h2', text: 'Under a minute, every time' },
      {
        type: 'quote',
        text: 'The benchmark is not "under a minute once, when everyone is watching". It is under a minute at 9pm on a Saturday, for the four-hundredth lead of the month.',
      },
      {
        type: 'p',
        text: 'That consistency is the entire value. Speed you can rely on changes how a sales team plans its day; speed that depends on who is at a desk changes nothing. If your lead ads are performing but your pipeline is leaking, the fix is rarely a better ad. It is the sixty seconds after the click.',
      },
    ],
  },
  {
    slug: 'true-cost-slow-response',
    title: 'The true cost of a slow sales response',
    category: 'Lead Operations',
    date: '28 June 2026',
    dateISO: '2026-06-28',
    readTime: '5 min read',
    excerpt:
      'Lead interest decays like heat. Here is the arithmetic of what a 24-hour response actually costs — worked through with real numbers.',
    body: [
      {
        type: 'p',
        text: 'A lead is hottest at the moment of enquiry. They are on your website, thinking about your product, with the problem fresh in their mind and the budget conversation recent. Every hour that passes, that heat radiates away — into a competitor\u2019s follow-up, a colleague\u2019s doubt, or simply the noise of a busy week.',
      },
      { type: 'h2', text: 'The decay curve' },
      {
        type: 'p',
        text: 'Speed-to-lead research has been repeated so often, across so many industries, that its central finding is close to consensus: the odds of a meaningful conversation collapse within the first hour and keep falling from there. Reach someone in five minutes and you are talking to the person who just asked. Reach them in two days and you are interrupting someone who has moved on.',
      },
      {
        type: 'p',
        text: 'The exact percentages vary by market. The shape of the curve does not. It is steep at the start, and everything about a typical follow-up process — inbox checks, morning triage, working hours — sits on the wrong side of the steepness.',
      },
      {
        type: 'p',
        text: 'The steepness also means the gains are asymmetric. Moving from a two-day response to a one-day response barely registers; the interest is already gone. Moving from an hour to five minutes, on the other hand, is the difference between joining a live conversation and starting a cold one. If you are going to invest in speed, invest at the front of the curve — that is where the revenue lives.',
      },
      { type: 'h2', text: 'A worked calculation' },
      {
        type: 'p',
        text: 'Take a business doing respectable volume: 200 leads a month, an 8 percent close rate, and an average deal worth £4,000. At full efficiency that is £64,000 a month of expected revenue from new enquiries.',
      },
      {
        type: 'p',
        text: 'Now apply a delay factor — the share of otherwise-winnable revenue that a given response speed puts at risk. Our model, the same one behind our ROI calculator, uses a scale that runs from roughly 5 percent at risk when follow-up happens within five minutes, to around 70 percent when it drifts past three days. Following up "within 24 hours" — which most teams would call acceptable — sits at roughly 35 percent.',
      },
      {
        type: 'list',
        items: [
          'Under 5 minutes — around 5 percent of winnable revenue at risk.',
          'Within 1 hour — around 15 percent.',
          'Within 24 hours — around 35 percent.',
          '2 to 3 days — around 55 percent.',
          'Over 3 days — around 70 percent.',
        ],
      },
      {
        type: 'p',
        text: 'For our example business at the 24-hour mark, the arithmetic is blunt: 200 leads, times an 8 percent close rate, times £4,000, times 0.35 — approximately £22,400 leaking every month. Over a year, £268,800. Not lost to bad ads or a weak product. Lost to the gap between when a lead arrived and when someone acted.',
      },
      { type: 'h2', text: 'Why the leak survives every quarterly review' },
      {
        type: 'p',
        text: 'Part of what makes this loss so persistent is that it appears on no report. Finance sees the ad spend, and finance sees the revenue — but the gap between what the pipeline produced and what it could have produced has no line item. Nobody is accountable for a number nobody measures, so the leak quietly renews itself every month while the meetings discuss creative and targeting.',
      },
      { type: 'h2', text: 'The fix is operational, not motivational' },
      {
        type: 'quote',
        text: 'You cannot pep-talk your way to five-minute responses at nine o\u2019clock on a Saturday night.',
      },
      {
        type: 'p',
        text: 'The instinct is to treat slow response as an effort problem — remind the team, set a target, add it to the Monday meeting. But the team was never the bottleneck. Nobody can respond to a lead they do not know exists, and no amount of motivation staffs an inbox around the clock.',
      },
      {
        type: 'p',
        text: 'The businesses that consistently hit fast response times do it with systems: every lead scored on arrival, hot leads triggering an instant alert with the full profile attached, and routing that puts the enquiry in front of the right person rather than the whole team. When the system does the noticing, the humans only have to do the calling.',
      },
      {
        type: 'ctaLink',
        label: 'Run your own numbers in the ROI calculator',
        to: '/capabilities/roi-calculator',
      },
      {
        type: 'p',
        text: 'Put your own volume, close rate, and deal value through the model. Most operators are surprised — not that there is a leak, but at the size of it. The good news is that of all the problems in a sales operation, this is the most fixable. The curve is steep, but you get to choose where on it you sit.',
      },
    ],
  },
  {
    slug: 'whatsapp-support-channel',
    title: 'Why your practitioners message WhatsApp and ignore your help desk',
    category: 'Support Intelligence',
    date: '24 June 2026',
    dateISO: '2026-06-24',
    readTime: '6 min read',
    excerpt:
      'Support happens where people already are — and mid-treatment, nobody is searching a 60-page PDF one-handed.',
    body: [
      {
        type: 'p',
        text: 'If you sell devices and training to practitioners, run a simple audit: where do their questions actually arrive? Not where you would like them to arrive. Where they land. For most academies and device brands, the honest answer is a trainer\u2019s personal WhatsApp — at all hours, in fragments, often with a photo attached.',
      },
      { type: 'h2', text: 'Support happens where people already are' },
      {
        type: 'p',
        text: 'The help desk portal made sense to whoever bought it. It has categories, tickets, and a queue. But a practitioner opens WhatsApp dozens of times a day and your portal approximately never. Asking them to switch channels at the exact moment they need help is asking them to do your filing at their most stressful moment.',
      },
      {
        type: 'p',
        text: 'So they do the natural thing: they message the human who trained them. The help desk becomes the place questions go to be filed. WhatsApp is where they go to be answered.',
      },
      {
        type: 'p',
        text: 'The response behaviour follows the channel. Messages get opened in minutes and answered in kind; portal tickets and support emails get opened when someone remembers the portal exists. Fighting that gradient is a losing strategy. Meeting practitioners in the channel they already trust — and making that channel genuinely capable of answering — is the winning one.',
      },
      { type: 'h2', text: 'The mid-treatment reality' },
      {
        type: 'p',
        text: 'The most important support moment in this industry is not a leisurely one. It is nine o\u2019clock on a Saturday evening. There is a client in the chair. Gloves are on. The practitioner needs to confirm a device setting, a spot spacing, or an aftercare instruction — right now, with one hand, without leaving the room.',
      },
      {
        type: 'quote',
        text: 'Nobody searches a 60-page PDF one-handed with a client in the chair. They message someone — or they guess.',
      },
      {
        type: 'p',
        text: 'Both outcomes are bad for you. The message interrupts a trainer\u2019s weekend and depends entirely on whether they happen to see it. The guess puts your standards, your brand, and occasionally your client\u2019s skin at the mercy of memory.',
      },
      { type: 'h2', text: 'A knowledge base should answer, not sit in folders' },
      {
        type: 'p',
        text: 'Here is the frustrating part: the answer almost always exists. It is in the training manual, the SOP, the protocol document — written, approved, and correct. The problem was never knowledge. It is retrieval: getting the right paragraph to the right person in the right channel within seconds of the question.',
      },
      {
        type: 'p',
        text: 'That is what a support intelligence layer does. Your own materials — not generic content, your SOPs and your manuals — power instant answers on WhatsApp. The practitioner asks in plain language; the answer comes back in seconds, accurate to your standards, with the source referenced. The document stops being an archive and becomes an interface.',
      },
      { type: 'h2', text: 'Escalation done properly' },
      {
        type: 'p',
        text: 'Not every question should be answered automatically, and a well-built system knows it. Anything sensitive — an adverse reaction, a complaint, a situation the protocols do not cleanly cover — routes straight to your team, with the full conversation attached so nobody starts from "can you explain from the beginning".',
      },
      {
        type: 'p',
        text: 'And because every conversation is logged, the support channel starts teaching you things. The questions cluster. The clusters reveal exactly where training is thin, which module needs rewriting, and which topic deserves a refresher webinar. Support stops being a cost line and becomes your best source of curriculum intelligence.',
      },
      { type: 'h2', text: 'What this is not' },
      {
        type: 'p',
        text: 'None of this replaces your trainers — it protects them. The repeatable majority of questions, the ones with a documented answer, get handled instantly by the system. The judgement calls, the sensitive cases, and the conversations that build relationships stay human, arriving with context instead of chaos. For franchise networks the effect is doubled: every location gets the same standard of support, regardless of which trainer is on holiday.',
      },
      { type: 'h2', text: 'What changes' },
      {
        type: 'list',
        items: [
          'Answers in seconds, at any hour, in the channel practitioners already use.',
          'Trainer evenings and weekends handed back — humans handle the questions that genuinely need humans.',
          'Consistent quality: every practitioner gets the same correct answer, not whoever-was-available\u2019s best recollection.',
          'A searchable record of every question, revealing knowledge gaps you can actually fix.',
        ],
      },
      {
        type: 'p',
        text: 'Your practitioners have already voted on the channel. The only question is whether the thing answering them at 9pm is your knowledge base — or their memory of a course they took eight months ago.',
      },
    ],
  },
  {
    slug: 'lead-scoring-without-data-team',
    title: 'How to score leads automatically without hiring a data team',
    category: 'Lead Intelligence',
    date: '18 June 2026',
    dateISO: '2026-06-18',
    readTime: '7 min read',
    excerpt:
      'Fit, intent, and a temperature — transparent rules tuned to your business beat black-box models, and you can run them from day one.',
    body: [
      {
        type: 'p',
        text: 'Lead scoring has a reputation problem. Say the words and people picture a data science team, a machine learning model, six months of setup and a dashboard nobody trusts. So most businesses do not score at all — and their sales team works a chronological list where the best lead of the month waits its turn behind five browsers.',
      },
      {
        type: 'p',
        text: 'The truth is more useful: the scoring that changes a sales operation is simple, transparent, and buildable from the information already sitting in your enquiry forms.',
      },
      { type: 'h2', text: 'What scoring actually measures' },
      {
        type: 'p',
        text: 'Good scoring separates two questions that usually get blurred together. Fit asks: who is this? Business type, whether they own a clinic, where they are based, how complete and serious the profile looks. Fit tells you whether this person could ever be a great customer.',
      },
      {
        type: 'p',
        text: 'Intent asks: what do they want, and when? Purchase timeline, finance readiness, which product they asked about, how they have engaged. Intent tells you whether they are buying now or gathering brochures. Blend the two and you get one number — and more importantly, a temperature: hot, warm, or cold, with a recommended action attached.',
      },
      { type: 'h2', text: 'Why rules tuned to your business beat generic models' },
      {
        type: 'list',
        items: [
          'Transparency — when a lead scores 87, you can see exactly why: which answers earned which points. Sales trusts what it can inspect.',
          'Control — when the market shifts, you change a rule this afternoon, not retrain a model next quarter.',
          'Your definition of good — a generic model optimises for someone else\u2019s customer. Your rules encode what a great buyer looks like for you.',
          'No cold start — rules work from the first lead. No training data, no waiting period, no black box.',
        ],
      },
      { type: 'h2', text: 'A worked example' },
      {
        type: 'p',
        text: 'A practitioner — call her Sarah — submits an enquiry from a lead ad. She owns a clinic, she is UK based, her profile is complete, and her business looks established. On fit: owning a clinic earns 25 points, an established business 20, a complete profile 15, UK based 10. Fit score: 70.',
      },
      {
        type: 'p',
        text: 'Her answers say more. She wants to buy immediately (40 points), she is finance ready (25), she named the specific device she wants (15), and she engaged with pricing (10). Intent score: 90. Blend the two and Sarah lands at 81 — hot, with a recommended action of "call today" already attached to the record.',
      },
      {
        type: 'p',
        text: 'Sixty seconds after Sarah pressed submit, your team knows she is the most important conversation of the day. That is the entire trick. No model, no data team — just your own knowledge of what a buyer looks like, written down as rules and applied to every lead without exception.',
      },
      {
        type: 'p',
        text: 'It matters what the salesperson actually sees. Not a bare number, but the number with its reasons: the score, the temperature, and the tags that earned it — owns clinic, buying this month, finance ready — sitting on the CRM record next to a recommended action. The first call starts with context, and the conversation opens on what Sarah asked about rather than on twenty questions she already answered in the form.',
      },
      { type: 'h2', text: 'What good scoring changes about a sales day' },
      {
        type: 'list',
        items: [
          'Mornings start with a ranked queue, not CRM archaeology. The first call is the best call.',
          'Hot leads interrupt the day — as they should — via instant alerts instead of waiting to be discovered.',
          'Cold leads stop absorbing call time and move into nurture, where they belong until their intent changes.',
          'Managers finally see quality per source: not "Meta sent 74 leads" but "Meta sent 12 hot ones at £154 each".',
        ],
      },
      { type: 'h2', text: 'Where to start' },
      {
        type: 'p',
        text: 'Pick three fit signals and three intent signals you already collect, assign points that reflect your instinct, and set two thresholds for hot and warm. Then sanity-check it: run last month\u2019s closed deals through the rules. If your buyers would have scored hot, the rules are close. If not, adjust the weights — you will learn more about your pipeline in that hour than in a quarter of reporting.',
      },
      {
        type: 'p',
        text: 'Then keep tuning. Once a month, look at what closed and what the rules said about it at the time. Promote the signals that predicted well, demote the ones that did not, and resist the urge to add complexity — five well-chosen signals beat twenty vague ones. Scoring is never finished, but it is useful from the first day and sharper every month after.',
      },
      {
        type: 'quote',
        text: 'Scoring is not a data science project. It is your sales judgement, written down once and applied to every lead forever.',
      },
    ],
  },
  {
    slug: 'why-leads-go-cold',
    title:
      'Why 80 percent of leads never get a proper follow-up — and what it costs you',
    category: 'Lead Operations',
    date: '12 June 2026',
    dateISO: '2026-06-12',
    readTime: '6 min read',
    excerpt:
      'The follow-up gap is not a discipline problem. It is a systems problem — and it compounds every single month.',
    body: [
      {
        type: 'p',
        text: 'Ask any sales leader whether follow-up matters and you will get an emphatic yes. Then open their CRM and look at what actually happened to last month\u2019s leads. Across industries the picture repeats: a large majority of enquiries receive one contact attempt or none at all. The exact figure moves around, but practitioners of pipeline audits will tell you the same thing — proper, persistent follow-up is the exception, not the rule.',
      },
      { type: 'h2', text: 'The follow-up gap' },
      {
        type: 'p',
        text: 'The gap has a consistent shape. New leads get a burst of attention in the first day or two. Then the burst fades: the next campaign lands, the week gets busy, and the lead that did not answer the first call quietly stops existing. Nobody decided to abandon it. It simply fell below the line of what a busy human can hold in their head.',
      },
      {
        type: 'p',
        text: 'That is worth sitting with, because it reframes the problem. The leads being dropped are not bad leads. Many of them are buyers with a slightly longer timeline, or people who missed one call. They cost exactly as much to generate as the leads that closed — and they leave through a hole in the process, not a flaw in the product.',
      },
      { type: 'h2', text: 'Speed to lead is not a soft metric' },
      {
        type: 'p',
        text: 'The research on response speed has been run so many times, in so many markets, that its core finding functions as industry consensus: the likelihood of reaching and qualifying a lead collapses within the first hour of the enquiry and keeps falling from there. Minutes genuinely beat hours, and hours demolish days.',
      },
      {
        type: 'p',
        text: 'The mechanism is human, not mysterious. In the first minutes, the person who enquired is still in the moment — your product open in a tab, the need articulated, the decision energy high. A day later you are a cold interruption asking them to reconstruct their own interest. Two competitors may already have called.',
      },
      { type: 'h2', text: 'The compounding cost of delay' },
      {
        type: 'p',
        text: 'No single slow follow-up loses the whole deal. What it does is shave probability — a discount on the chance that enquiry ever becomes revenue. The damage comes from applying that discount to every lead, every month. A business generating 200 leads a month does not lose one deal to slowness; it loses a percentage of all of them, forever, and the percentage is bigger than anyone in the building would guess.',
      },
      {
        type: 'p',
        text: 'Run the thought experiment on your own numbers. If even one in ten of the leads that got a single half-hearted attempt was genuinely winnable, what is that worth at your average deal value? For most businesses the answer is a figure that would justify the entire fix several times over — funded not by new spend, but by enquiries already generated and already paid for.',
      },
      {
        type: 'quote',
        text: 'Follow-up speed is not a personality trait of your sales team. It is a property of your systems.',
      },
      { type: 'h2', text: 'Why good teams still miss it' },
      {
        type: 'p',
        text: 'This is the part that matters, because the standard diagnosis — the team needs to try harder — is wrong. The teams dropping leads are usually working flat out. They are failing for structural reasons:',
      },
      {
        type: 'list',
        items: [
          'Leads arrive in different places — an ad platform, a form inbox, a chat log — and no one list contains all of them.',
          'Nothing is prioritised, so the newest lead gets attention while the best lead waits its turn.',
          'Knowing a lead exists depends on someone checking, which means evenings, weekends, and busy days are a black hole.',
          'Every lead looks identical in the CRM, so triage happens by gut feel and whoever shouts loudest.',
        ],
      },
      { type: 'h2', text: 'How scoring and alerts close the gap' },
      {
        type: 'p',
        text: 'The fix maps directly onto the failure. Scoring answers who first: every lead measured on fit and intent the moment it arrives, so the queue is ranked by value instead of arrival time. Alerts answer when: hot leads trigger an instant notification with the full profile attached, so the team learns about the best enquiry of the week in seconds — including at 9pm on a Saturday. And sync answers where: one CRM record, always current, so nothing lives in an inbox nobody checks.',
      },
      {
        type: 'p',
        text: 'If you want to know whether this is your problem, measure one number this week: time to first touch, from enquiry to first genuine contact attempt, for every lead. Most operators have never seen that figure. Almost all of them are shocked by it — and the shock is the beginning of the fix.',
      },
    ],
  },
];

export default articles;
