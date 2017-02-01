require "spec_helper"

# this spec only works when the espisode upcoming is set to false.
# So for now we skip it.
describe "past episode page", :type => :feature do
  before do
    visit "/podcast/episode-4-dave-hoover/"
  end

  xit "should not show the episode as upcoming" do
    expect(find(".podcast-header")).not_to have_text "Upcoming"
  end

  xit "should have download links" do
    expect(page).to have_css ".podcast-download-options .mp3"
    expect(page).to have_css ".podcast-download-options .itunes"
  end

  xit "should not have a subscription form" do
    expect(page).not_to have_css ".podcast.is-upcoming form.email-subscription-form"
  end

  xit "should have an mp3 player" do
    expect(page).to have_css ".podcast .listen .player"
  end

  xit "should show josh and venkat" do
    expect(find(".footer-content")).to have_text "Josh Smith"
    expect(find(".footer-content")).to have_text "Venkat Dinavahi"
  end

end