require "spec_helper"

describe "upcoming episode page", :type => :feature do
  before do
    visit "/podcast/episode-18-abby-covert/"
  end

  xit "should show the episode as upcoming" do
    expect(find(".podcast-header")).to have_text "Upcoming"
  end

  xit "should not have download links" do
    expect(page).not_to have_css ".podcast-download-options .mp3"
    expect(page).not_to have_css ".podcast-download-options .itunes"
  end

  xit "should have a subscription form" do
    expect(page).to have_css ".podcast.is-upcoming form.email-subscription-form"
  end

  xit "should not have an mp3 player" do
    expect(page).not_to have_css ".podcast .listen .player"
  end

  xit "should show josh and venkat" do
    expect(find(".footer-content")).to have_text "Josh Smith"
    expect(find(".footer-content")).to have_text "Venkat Dinavahi"
  end
  

end